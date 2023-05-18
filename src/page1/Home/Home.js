
import MovieList from "../../Components/movielist/MovieList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css";
const Home = () => {
    
    return (
        <>
       
        <div className="poster">
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                    xs=12 md=8
                    </Col>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                 </Row>
            </Container>
             <MovieList />
        </div>
        </>
    )
}

export default Home;