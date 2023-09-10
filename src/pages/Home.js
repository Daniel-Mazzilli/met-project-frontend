import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            Home Page
            <br />
            IN CONSTRUCTION ...
            <br/>
            currently working on <Link to="search" style={{color: "blue"}}>search page</Link>
        </div>
    );
}