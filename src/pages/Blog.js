import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    padding-bottom: 3rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  h1 {
    color: ${props => props.theme.colors.text};
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: ${props => props.theme.colors.textSecondary};
    font-size: clamp(1rem, 2vw, 1.1rem);
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BlogCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid rgba(66, 153, 225, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: 180px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const BlogTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const BlogExcerpt = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: clamp(1rem, 2vw, 1.1rem);

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }
`;

const Tag = styled.span`
  background: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-top: 0.8rem;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.6rem;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}20;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0.6rem;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}20;
  }
`;

const Emphasis = styled.span`
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    opacity: 0;
    transform: scaleX(0.7);
    transition: all 0.3s ease;
  }  
`;


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/content");
      setPosts(response.data);

      // Extract unique tags
      const uniqueTags = [
        ...new Set(response.data.flatMap((post) => post.tags)),
      ];
      setTags(uniqueTags);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <Container>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <Emphasis>Blog</Emphasis>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover insights, updates, and stories from our team
        </motion.p>
      </Header>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SearchContainer>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ flex: 1 }}
            >
              <SearchInput
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="all">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </Select>
            </motion.div>
          </SearchContainer>
        </>
      )}
      <BlogGrid>
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            {post.image && (
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <BlogImage>
                  <img src={post.image} alt={post.title} />
                </BlogImage>
              </motion.div>
            )}
            <BlogContent>
              <BlogTitle>
                <Link to={`/blog/${post._id}`}>{post.title}</Link>
              </BlogTitle>
              <BlogExcerpt>{post.content.substring(0, 150)}...</BlogExcerpt>
              <TagsContainer>
                {post.tags.map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <Tag>{tag}</Tag>
                  </motion.div>
                ))}
              </TagsContainer>
              <MetaInfo>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {post.author}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {new Date(post.date).toLocaleDateString()}
                </motion.span>
              </MetaInfo>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default Blog;
