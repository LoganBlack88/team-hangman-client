import { Col, Container, Row } from "react-bootstrap"
import NewGame from "../NewGame/NewGame";
import './Home.scss';


export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Home</h1>
          <NewGame/>
        </Col>
      </Row>
    </Container>
  );
}
