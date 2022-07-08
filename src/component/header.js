import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/header.css';
import Banner from './banner'
class Navbar extends React.Component{
constructor(){
  super()
  this.state = {
    refs:React.createRef(),
   navbar:React.createRef(),
   y:window.scrollX,
   search:'',
   dropDown:true
  }
}

componentDidMount(){
 window.addEventListener('scroll',this.scrolls)
}

scrolls = (e) => {
  let x = window.scrollY;
const header = this.state.refs.current

if (x > this.state.y) {
  header.classList.add("fixed-header");
}else {
  header.classList.remove("fixed-header");
}

this.setState({y:x})
}

handlerChange = (e) => {
  const {name,value} = e.target
  this.setState({
    search:value
  })
}

searchFetch = (e) => {
  e.preventDefault()
  const data = this.props.data
  this.setState(prev => {
    return{
    data:prev.search = this.state.search
    }
  })
window.location.reload()
}

dropDown = (e) => {
  e.preventDefault()
  const showMenu = this.state.navbar.current
  showMenu.classList.toggle('opens')
  // console.log("Tes");
  // spin[i].classList.toggle('open') 
}

    render(){
      const ID = `/movie-search/${this.state.search}`
        return(
      <>
<header className='header' ref={this.state.refs} onScroll={this.scrolls}>
<div className='hamburger-container'>
<div className="hamburger" onClick={this.dropDown}>
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
</div>
<form className="forms" onSubmit={this.searchFetch}>
<input  type="text" name="search" placeholder="Search.." onChange={this.handlerChange}/>
{this.state.search.length > 0 ? <Link to={ID} > <button type="submit" className="buton">Search</button></Link> : <button type="submit" className="buton" >Search</button> }
</form> 
</div>
<nav className="navbar" ref={this.state.navbar}>
        <ul className="list">
        <li><Link to='/'><img width="51" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></Link></li>
          <li className="dropdown"><Link to='/movies/'>Movie</Link></li>
          <li className="dropdown-tv"><Link to='/tv-series/'>TV Series</Link></li>
          <li><Link to='/anime-populer/'>Anime</Link></li>
          <li><Link to='/popular-people'>People</Link></li>
        </ul>
        <form className="form" onSubmit={this.searchFetch}>
<input  type="text" name="search" placeholder="Search.." onChange={this.handlerChange}/>
{this.state.search.length > 0 ? <Link to={ID} > <button type="submit" className="buton">Search</button></Link> : <button type="submit" className="buton" >Search</button> }
</form> 
      </nav>
    </header>

      </>
        )
    }
}

export default Navbar;