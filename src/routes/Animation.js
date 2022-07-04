import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Movie from "../components/Movie-all";
import styles from "./TopRating.module.css";

function Animation() {
    const [loading,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=like_count&genre=animation`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []); 

    return (
        <div className={styles.container}>
            {loading ? (<h1 className={styles.loader}>Loading...</h1>) :
              (
                <div className={styles.movie__container}>
                  <div className={styles.movie__box}>{movies && movies.map((movie) => (<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} year={movie.year} genres={movie.genres} summary={movie.summary}/>))}</div>
                </div>
              )}
        </div>
        );     
}

export default Animation