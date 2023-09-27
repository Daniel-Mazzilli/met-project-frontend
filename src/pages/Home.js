import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            IN DEVELOPMENT
            <br/>
            building mobile first
            <br/>
            <br/>
            currently working on the <Link to="search" style={{color: "blue"}}>search</Link>
        </div>
    );
}