import React from 'react'
import logo from '../tmdb-logo.svg';
function Footer(){
    return(
<footer className="footers">
<div className="footer-info">
<a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank">
<img src={logo} alt="" />
</a>
</div>
</footer>
    )
}

export default Footer;