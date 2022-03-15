import { Card, Image, Button } from "react-bootstrap";
import background from "./components/bg.png";

function HomePage({ postInfo, categoryInfo, authorInfo }) {
  return (
    <div>
        <section style={{backgroundColor: '#ffecf4', textAlign: 'center'}}>
        <Image
        src={background}
        className="img"
        alt="..."
        width='80%'
      />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "80px",
            color: "black",
            marginBottom: 0
          }}
        >
          Welcome <br /> to <br /> Blogger
        </h1>
        </section>
    </div>
  );
}

export default HomePage;
