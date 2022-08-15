import nav from "./Nav.module.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    let last_known_scroll_position = 0;
    const [changing, setChanging] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const doSomething = (scroll_pos) => {
        if (scroll_pos >= 10) {
            setChanging(true);
            setScrolling(true);
        } else {
            setChanging(false);
            setScrolling(false);
        }
    }

    window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
  
    window.requestAnimationFrame(function() {
    doSomething(last_known_scroll_position)
    });

    });

    const onMouseOverOut = () => {
        if (scrolling)
            return;      
        setChanging(current => !current);
    }

    const navLinkStyles = ({ isActive }) => {
      return {
        opacity: isActive ? '1.0' : '0.7',
        
      }
    }

    return (
      <div className={nav.box} onMouseOver={onMouseOverOut} onMouseOut={onMouseOverOut} style={changing ? 
        {backgroundColor : "#0B0C10",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
         : {backgroundColor : "transparent"}}>
        <div className={nav.column}>
          <Link className={nav.home} to={`/react-movie-web-service`}>
          <span>
            <i class="fa-brands fa-magento"></i>
          </span>
          <span>RATING</span>
          </Link>
        </div>
        <div className={nav.column}>
          <span><NavLink  style={navLinkStyles} className={nav.genre} to={`/movie/TopRating`}>Top Rating</NavLink></span>
          <span><NavLink  style={navLinkStyles} className={nav.genre} to={`/movie/Animation`}>Animation</NavLink></span>
          <span><NavLink  style={navLinkStyles} className={nav.genre} to={`/movie/Action`}>Action</NavLink></span> 
          <span><NavLink  style={navLinkStyles} className={nav.genre} to={`/movie/Romance`}>Romance</NavLink></span>
        </div>
        <div className={nav.column}>
          <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter-square"></i></a>
          <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    );
}

export default Nav;
