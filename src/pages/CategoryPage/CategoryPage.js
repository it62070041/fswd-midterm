import { Nav, Stack } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import CardContent from "./components/CardContent";

function CategoryPage() {
  const [post, setPost] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);

  const GetPosts = async () => {
    const post = await axios.get(
      "https://fswd-wp.devnss.com/wp-json/wp/v2/posts"
    );
    setPost(post.data);
    setCurrentPost(post.data);
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

  function checkCategory(id, post) {
    if (id === 0) return post
    return post.filter((postId) => postId.categories.includes(id));
  }

  function GetCard() {
    return currentPost.map((index) => {
      return (
       
        <CardContent
          postInfo={index}
          categoryInfo={category}
          authorInfo={author}
        />
       
      );
    });
  }

  return (
    <div style={{backgroundColor: '#ffecf4', paddingTop: 40}}>

      <Nav justify variant="tabs" defaultActiveKey="all">
      <Nav.Item>
          <Nav.Link
            eventKey="all"
            onClick={() => setCurrentPost(checkCategory(0, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => setCurrentPost(checkCategory(3, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Category
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => setCurrentPost(checkCategory(77, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Classic
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => setCurrentPost(checkCategory(78, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Life
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onClick={() => setCurrentPost(checkCategory(75, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Runner
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            onClick={() => setCurrentPost(checkCategory(20, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Style
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-5"
            onClick={() => setCurrentPost(checkCategory(1, post))}
            style={{borderColor: '#fff', color: '#000'}}
          >
            Uncategorized
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Stack direction="horizontal" gap={3} style={{flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 20}}>
        <GetCard />
      </Stack>
    </div>
  );
}

export default CategoryPage;
