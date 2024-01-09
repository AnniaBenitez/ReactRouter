import { Link } from "react-router-dom"
import "../index.css"

export default function Navbar(){
    return( 
    <nav className="navBar">
        <h1 className="titulo">Tecnologías Emergentes</h1>
        <ul>
            <li>
                <Link to="./">Users</Link>
            </li>
            <li>
                <Link to="./products">Products</Link>
            </li>
        </ul>
    </nav>
    )
}