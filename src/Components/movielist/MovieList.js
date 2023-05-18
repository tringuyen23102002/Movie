import { useState, useEffect } from "react"
import axios from "axios"
import Cards from "../Card/Card";
import "./MovieList.css"
import { Params, useParams } from "react-router-dom";
export default function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const apiKey = "a635f3ca63e613e8fe5fb9b2790fb1ac";
    const { type } = useParams()
    const movieType = type ?     type : "popular";
  
    const getData = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}&language=en-US`
      axios
        .get(url)
        .then((res)=> {
        setMovieList(res.data.results);
        })
        .catch((error) => {
            console.log(error); // Hiển thị thông báo lỗi hoặc xử lý lỗi tại đây
          });
    };
    useEffect(() => {
        getData();
        
      }, [type]);
      console.log(movieList)
    return (
        <div className="movie_list">
            
            <div className="list_cards">
                {movieList.map((movie, index) => (
                    <Cards key={index} movie={movie} />
                ))}
            </div>
        </div>
    )
}
