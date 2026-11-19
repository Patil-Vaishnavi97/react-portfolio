import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{padding:"20px",background:"#222",color:"white"}}>

      <Link to="/" style={{marginRight:"15px",color:"white"}}>Home</Link>

      <Link to="/about" style={{marginRight:"15px",color:"white"}}>About</Link>

      <Link to="/education" style={{marginRight:"15px",color:"white"}}>Education</Link>

      <Link to="/projects" style={{marginRight:"15px",color:"white"}}>Projects</Link>

      <Link to="/skills" style={{marginRight:"15px",color:"white"}}>Skills</Link>

      <Link to="/contact" style={{color:"white"}}>Contact</Link>

    </nav>
  );
}

export default Navbar;