import { useEffect, useState, useCallback} from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie-detail";
import styles from "./Detail.module.css";

function Detail(){
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = useCallback(async() => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        }, [id]);
        useEffect(() => {
        getMovie();
        }, [getMovie]);
    return (        
        <div>
      {loading ? (<h1 className={styles.loader}>Loading...</h1>) : 
      ( <div><Movie key={movie.id} id={movie.id} coverImg={movie.background_image} title={movie.title} year={movie.year} summary={movie.description_full} runtime={movie.runtime} genres={movie.genres} poster={movie.medium_cover_image}/></div>)}
    </div>
        );          
    }

    export default Detail;