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
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Parser from "html-react-parser";
import moment from "moment";

function Comment() {
  const [comment, setComment] = useState([]);
  const { id } = useParams();
  const [commentName, setCommentName] = useState("");
  const [commentMessage, setCommentMessage] = useState("");

  useEffect(() => {
    const getComment = async () => {
      const result = await axios.get(
        `https://fswd-wp.devnss.com/wp-json/wp/v2/comments/?post=${id}`
      );
      setComment(result.data);
    };
    getComment();
  }, []);

  const handleName = (e) => {
    setCommentName(e.target.value);
  };
  const handleComment = (e) => {
    setCommentMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/comments', {
        method: 'POST',
        body: JSON.stringify({ post: id, author_name: commentName, content: commentMessage}),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ZnN3ZDpmc3dkLWNtcw==',
        }
    })
    console.log(response)
    
        setCommentMessage('')
        setCommentName('')
        if(alert('Comment Success')){}
        else{window.location.reload()}; 
        
};


  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Your name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="name"
              value={commentName}
              onChange={handleName}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Your comment
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="comment"
              onChange={handleComment}
            />
          </Col>
        </Form.Group>
        <Button
          style={{
            Color: "#f7f2e7",
            backgroundColor: "#867bbd",
            border: "none",
          }}
          onClick={() => handleSubmit()}
        >
          Comment
        </Button>
      </Form>

      {comment?.map((com) => (
        <Card
          style={{
            border: "5px solid #fff",
            borderRadius: 15,
            backgroundColor: "#ffecf4",
            marginTop: 20,
          }}
        >
          <Card.Body>
            <Row>
              <Col md={2} style={{ textAlign: "right" }}>
                <Image
                  src={com.author_avatar_urls["96"]}
                  className="img-fluid"
                  alt="..."
                  roundedCircle
                />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <h5 style={{ alignSelf: "center" }}>{com.author_name}</h5>
                <p style={{ color: "#a6a6a6" }}>
                  {dayjs(com.date).format("MMMM D, YYYY h:mm A")}
                </p>
                <p>{Parser(com.content.rendered)}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Comment;
