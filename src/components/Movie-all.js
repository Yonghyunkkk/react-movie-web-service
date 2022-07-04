import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie-all.module.css";

function Movie({id, coverImg, title, year, genres, summary}) {
    return(
    <div className={styles.container}>
      <img src={coverImg} alt={title} />
      <div className={styles.box}><h2>
        <Link className={styles.title} to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{year}</p>
        <ul>
          {genres.slice(0,3).map((g) => (
            <li key={g}>{g}</li>  
          ))}
        </ul>
        <p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movie;