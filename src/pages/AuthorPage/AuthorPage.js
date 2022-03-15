import { Image, Button, Container, Row, Col, Card, Stack } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import CardAuthor from "./components/CardAuthor";

function AuthorPage() {

    const [post, setPost] = useState([]);
    const [author, setAuthor] = useState([]);
    const [category, setCategory] = useState([]);
  
    const GetPosts = async () => {
      const post = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/posts"
      );
      setPost(post.data);
    };
  
    const GetAuthors = async () => {
      const author = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/users"
      );
      setAuthor(author.data);
    };
  
    const GetCategory = async () => {
      const category = await axios.get(
        "https://fswd-wp.devnss.com/wp-json/wp/v2/categories"
      );
      setCategory(category.data);
    };

    useEffect(() => {
        GetPosts();
        GetAuthors();
        GetCategory();
      }, []);

      function GetCard() {
        return (
            <CardAuthor
              postInfo={post}
              categoryInfo={category}
              authorInfo={author}
            />
          );
      }
  return (
    <div style={{backgroundColor: '#ffecf4', textAlign: 'center'}}>
      <h1 style={{ paddingTop: 20, }}>About Author</h1>
    
      <Stack direction="horizontal" gap={3} style={{justifyContent: 'center', paddingBottom: 10}}>
        <GetCard />
      </Stack>
    </div>
  );
}

export default AuthorPage;
