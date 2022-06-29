import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);
    const [movies4, setMovies4] = useState([]);
    const [trans, setTrans] = useState(0);
    const [trans2, setTrans2] = useState(0);
    const [trans3, setTrans3] = useState(0);
    const [trans4, setTrans4] = useState(0);
    const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=like_count&genre=animation`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const getMovies2 = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=like_count&genre=action`);
    const json = await response.json();
    setMovies2(json.data.movies);
    setLoading(false);
  };

  const getMovies3 = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=like_count&genre=romance`);
    const json = await response.json();
    setMovies3(json.data.movies);
    setLoading(false);
  };

  const getMovies4 = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year&genre=all&order_by=featured`);
    const json = await response.json();
    setMovies4(json.data.movies);
    setLoading(false);
  };
    
    const onClickL = () => {
      if (trans >= 0) {
        return;
      }
      setTrans(current => current + 350); 
    }
    const onClickR = () => {
      if (trans <= -5450) {
        return;
      }
      setTrans(current => current - 350);
    }

    const onClickL2 = () => {
      if (trans2 >= 0) {
        return;
      }
      setTrans2(current => current + 350); 
    }
    const onClickR2 = () => {
      if (trans2 <= -5450) {
        return;
      }
      setTrans2(current => current - 350);
    }

    const onClickL3 = () => {
      if (trans3 >= 0) {
        return;
      }
      setTrans3(current => current + 350); 
    }
    const onClickR3 = () => {
      if (trans3 <= -5450) {
        return;
      }
      setTrans3(current => current - 350);
    }

    const onClickL4 = () => {
      if (trans4 >= 0) {
        return;
      }
      setTrans4(current => current + 350); 
    }
    const onClickR4 = () => {
      if (trans4 <= -5450) {
        return;
      }
      setTrans4(current => current - 350);
    }
    

    useEffect(() => {
        getMovies();
        getMovies2();
        getMovies3();
        getMovies4();
        console.log(movies);
    }, []); 
  return (
  <div>

    <div className={styles.container}>
      {loading ? (<h1 className={styles.loader}>Loading...</h1>) :
        (
          <div className={styles.movie__container}>
            <h1>Top Rating</h1>
            <div className={styles.movie__box} style={{
              transform: `translateX(${trans4}px)`
            }}>{movies4 && movies4.map((movie) => (<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} year={movie.year} genres={movie.genres} />))}</div>
          </div>
        )}


      {loading ? null : (
        <div>
          <button class={styles.left} onClick={onClickL4}><i class="fas fa-caret-square-left"></i></button>
          <button class={styles.right} onClick={onClickR4}><i class="fas fa-caret-square-right"></i></button>
        </div>
      )}
      
    </div>

    <div className={styles.container}>
      {loading ? (null) :
        (
          <div className={styles.movie__container}>
            <h1>Animation Movies</h1>
            <div className={styles.movie__box} style={{
              transform: `translateX(${trans}px)`
            }}>{movies && movies.map((movie) => (<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} year={movie.year} genres={movie.genres} />))}</div>
          </div>
        )}


      {loading ? null : (
        <div>
          <button class={styles.left} onClick={onClickL}><i class="fas fa-caret-square-left"></i></button>
          <button class={styles.right} onClick={onClickR}><i class="fas fa-caret-square-right"></i></button>
        </div>
      )}
      
    </div>
    <div className={styles.container}>
    {loading ? null:
      (
        <div className={styles.movie__container}>
          <h1>Action Movies</h1>
          <div className={styles.movie__box} style={{
            transform: `translateX(${trans2}px)`
          }}>{movies2 && movies2.map((movie) => (<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} year={movie.year} genres={movie.genres} />))}</div>
        </div>
      )}


    {loading ? null : (
      <div>
        <button class={styles.left} onClick={onClickL2}><i class="fas fa-caret-square-left"></i></button>
        <button class={styles.right} onClick={onClickR2}><i class="fas fa-caret-square-right"></i></button>
      </div>
    )}

    
    
  </div>
  <div className={styles.container}>
    {loading ? null:
      (
        <div className={styles.movie__container}>
          <h1>Romance Movies</h1>
          <div className={styles.movie__box} style={{
            transform: `translateX(${trans3}px)`
          }}>{movies3 && movies3.map((movie) => (<Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} year={movie.year} genres={movie.genres} />))}</div>
        </div>
      )}


    {loading ? null : (
      <div>
        <button class={styles.left} onClick={onClickL3}><i class="fas fa-caret-square-left"></i></button>
        <button class={styles.right} onClick={onClickR3}><i class="fas fa-caret-square-right"></i></button>
      </div>
    )}

    
    
  </div>
  </div>   
    
  );
}

export default Home;