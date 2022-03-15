import {
  Image,
  Button,
  Row,
  Container,
  Col,
  Form,
  Card,
} from "react-bootstrap";
import Parser from "html-react-parser";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Comment from "./Comment.js";

function CardDetail({ postInfo, categoryInfo, authorInfo }) {
  var auName, auImg;
  auName = authorInfo.filter((author) => author.id === postInfo.author);
  auImg = authorInfo.filter((author) => author.id === postInfo.author);
  return (
    <div>
      <h3 style={{ paddingTop: 10 }}>{postInfo.title.rendered}</h3>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row style={{ paddingBottom: 10 }}>
        <Col md={2} style={{ textAlign: "right" }}>
          <Image
             src={auImg[0].avatar_urls[96]}
            className="img-fluid"
            alt="..."
            roundedCircle
          />
        </Col>
        <Col md={10} style={{ textAlign: "left" }}>
          <h3 style={{ marginTop: 20 }}>{auName[0].name}</h3>
          <p>{dayjs(postInfo.modified).format('MMMM D, YYYY h:mm A')}</p>
        </Col>
      </Row>

      <p style={{ textAlign: "left" }}>{Parser(postInfo.content.rendered)}</p>
      <div>
      <h2 style={{ margin: 20 }}>Comments</h2>
          <Comment/>
      </div>
    </div>
  );
}

export default CardDetail;
