import nav from "./Nav.module.css";
import {Link} from "react-router-dom";

function Nav() {
    return (
      <div className={nav.box}>
        <div className={nav.column}>
        <Link className={nav.home} to={`/`}>
          <span>
            <i class="fa-brands fa-magento"></i>
          </span>
          <span>RATING</span>
          </Link>
        </div>
        <div className={nav.column}>
          <span>Top Rating</span>
          <span>Animation</span>
          <span>Action</span> 
          <span>Romance</span>
        </div>
        <div className={nav.column}>
          <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    );
}

export default Nav;