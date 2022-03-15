import { Card, Image, Button } from "react-bootstrap";
import Parser from 'html-react-parser';
import dayjs from 'dayjs';
import {Link} from "react-router-dom";

function CardContent({ postInfo, categoryInfo, authorInfo }) {

  var auName, auImg, category;

  auName = authorInfo.filter(author => author.id === postInfo.author)
  auImg = authorInfo.filter(author => author.id === postInfo.author)
  category = postInfo.categories.map(e => categoryInfo.filter(cid => e === cid.id))

  return (
    <div>
      <Card style={{ width: "26rem", height: "30rem", backgroundColor: '#f7f2e7', marginTop: 40, borderRadius: 15, border: "5px solid #fff" , textAlign: 'center'}} >
      <Card.Body style={{ marginTop: 10}}>
            <Image
              src={auImg[0].avatar_urls[96]}
              className="img-fluid"
              alt="..."
              roundedCircle
            />
          <h3 style={{ marginTop: 20 }}>{auName[0].name}</h3>
          <p style={{ color: '#a6a6a6' }}>{dayjs(postInfo.modified).format('MMMM D, YYYY h:mm A')}</p>
          <Card.Title style={{ marginTop: 30 }}>{postInfo.title.rendered}</Card.Title>
          <Card.Text style={{ color: '#a6a6a6' }}>{Parser(postInfo.excerpt.rendered)}</Card.Text>
          <Card.Text>Categoty : {category.map(cid=> cid[0].name).join(", ")}</Card.Text>

          <Link to={{pathname : `/post/${postInfo.id}`}}>
                <Button style={{ Color: '#fff', backgroundColor: '#867bbd', border: 'none' }} >Read More</Button>
            </Link>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardContent;
