import { Image, Button, Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";


function CardAuthor({ postInfo, categoryInfo, authorInfo }) {
  

  return (
    <div>
    {authorInfo?.map(author =>
            <Card
              style={{
                width: "22rem",
                backgroundColor: '#f7f2e7',
                marginTop: 10,
                border: "5px solid #fff",
                borderRadius: 15,
                marginBottom: 20
              }}
            >
              <Card.Body style={{ marginTop: 10 }}>
                <Image
                  src={author.avatar_urls[96]}
                  className="img-fluid"
                  alt="..."
                  roundedCircle
                />
                <h3 style={{ marginTop: 20 }}>{author.name}</h3>
                <h6 style={{ marginTop: 10, color: '#a6a6a6' }}>{author.slug}</h6>
                <Card.Text style={{ marginTop: 20 }}> {postInfo?.filter(post => post.author === author.id).length} Posts</Card.Text>
                <Button style={{ color: '#fff', backgroundColor: '#867bbd', border: 'none' }} onClick={() => console.log(author)}>View {author.name} Posts</Button>
              </Card.Body>
            </Card> 
    )}
    </div>
  );
}

export default CardAuthor;
