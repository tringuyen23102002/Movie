import { Link } from "react-router-dom";



    const Cards = (props) => {
        const { movie } = props;
        return (
            <>
            <Link to={`/movie/${movie.id}`}
            style={{ textDecoration: "none", color: "white"}}
            >
            <div className="cards">
                <img 
                className="cards_img"
                src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                }`}
                />
                <div className="cards_overlay">
                    <div className="card_title">
                        {movie ? movie.original_title : ""}
                    </div>
                    <div className="cards_runtime">
                        {movie ? movie.realese_date : ""}
                        <span className="card_rating">
                            <i className="fas fa-star"/>
                        </span>
                    </div>
                    <div className="cards_description">
                        {movie ? movie.overview.slice(0, 118) + "..." : ""}
                    </div>
                </div>
            </div>
            </Link>
            </>
        )
    }
export default Cards;