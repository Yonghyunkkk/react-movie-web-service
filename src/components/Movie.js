import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, genres}) {
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
        </ul></div>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;