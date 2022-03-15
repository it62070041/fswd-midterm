import {
  Image,
  Button,
  Row,
  Container,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import CardDetail from "./components/CardDetail";
import { useParams } from "react-router";

function PostContentPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);

  const GetPosts = async () => {
    const post = await axios.get(
      "https://fswd-wp.devnss.com/wp-json/wp/v2/posts/" + id
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
    if (
      category.length !== 0 &&
      author.length !== 0 && Object.keys(post).length !== 0
    ) {
      return (
          <CardDetail key={post.id} postInfo={post} categoryInfo={category} authorInfo={author} />
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div style={{ backgroundColor: "#ffecf4" }}>
      <Container style={{ paddingTop: 20, textAlign: "center" }}>
        <GetCard />
      </Container>
    </div>
  );
}

export default PostContentPage;

