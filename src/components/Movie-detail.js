import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie-detail.module.css";

function Movie({id, coverImg, title, year, summary, runtime, genres, poster}) {
    return(
  <div>
      <img className={styles.background__img} src={coverImg} alt={title} />
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box__info}>
          <h2 className={styles.box__info_title}>
            {title}
          </h2>
          <div className={styles.box__detail}>
            <h4>{year} |</h4>
            <h4>{runtime} minutes |</h4>
            <ul>
              {genres.slice(0,1).map((g) => (
              <li key={g}>{g}</li>  
              ))}
            </ul>
          </div>
          <p>
          {summary}
          </p>
        </div>
        <img className={styles.poster} src={poster}/>
      </div>
    </div>
  </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;