import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingSpinner from "../components/LoadingSpinner";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
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
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    background: linear-gradient(90deg,#2563eb, rgb(255, 255, 255));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: clamp(2rem, 4vw, 3.5rem);
    margin-bottom: 1rem;
    line-height: 1.3;

    @media (max-width: 768px) {
      margin-bottom: 0.8rem;
    }
  }

  .meta {
    color: ${(props) => props.theme.colors.textSecondary};
    max-width: 1200px;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    display: flex;
    justify-content: right;
    gap: 1rem;
    margin-bottom: rem;
    padding: 0rem 0;

    @media (max-width: 480px) {
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
      padding-bottom: 1rem ;
    }
  }

  .date {
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: clamp(0.9rem, 1.5vw, 1rem);
  }
`;

const Content = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  max-width: 1200px;
  margin: 0 auto;

  p {
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      margin-bottom: 1.2rem;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content:left;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 1.5rem;
  }
`;

const Tag = styled.span`
  background: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 0.8rem;
  font-size: clamp(0.8rem, 1.5vw, 0.875rem);

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease;
  font-size: clamp(0.9rem, 1.5vw, 1rem);

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
    transform: translateX(-5px);
  }

  svg {
    margin-right: 0.5rem;
    width: clamp(16px, 2vw, 18px);
    height: clamp(16px, 2vw, 18px);
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: clamp(200px, 40vw, 300px);
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
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

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`/api/content/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      setLoading(false);
    }
  };

  if (!post) {
    return (
      <Container>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Header>
              <h1>Post not found</h1>
              <BackButton to="/blog">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Blog
              </BackButton>
            </Header>
          </>
        )}
      </Container>
    );
  }

  return (
    <Container>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BackButton to="/blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </BackButton>
          </motion.div>

          <Header>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {post.title}
            </motion.h1>
            {post.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BlogImage>
                  <img src={post.image} alt={post.title} />
                </BlogImage>
              </motion.div>
            )}
            <motion.div 
              className="meta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span>By {post.author}</span>
              <span>/</span>
              <span className="date">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TagsContainer>
                {post.tags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <Tag>{tag}</Tag>
                  </motion.div>
                ))}
              </TagsContainer>
            </motion.div>
          </Header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Content>
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </Content>
          </motion.div>
        </>
      )}
    </Container>
  );
};

export default BlogPost;
