import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom";

import { useState } from "react";
export default function Navbar(props) {
    const cookies = new Cookies();
    const navigate = useNavigate();
  

    

    const logOut = async () => {
        cookies.remove("token");
        navigate("/");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ "height": "70px", "backgroundColor": '#dbdbdb' }}>
                    <a className="navbar-brand" href="#">Blogger</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-1">
                                <a className="btn nav-link active  text-light fs-6" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="btn nav-link  text-light fs-6" href="/compose">Compose</a>
                            </li>
                            <li className="nav-item mx-1">
                                <a className="btn nav-link  text-light fs-6" href="/mypost">Posts</a>
                            </li>
                        </ul>
                       
                        <div className="mt-2" style={{ "marginLeft": "auto" }}>
                            <ul className="navbar-nav">
                            <li className="nav-item me-3"> <p className="btn text-white fs-6 ">{props.name}</p></li>
                              <li className="nav-item mx-2">  <button className= "btn btn-light bg-pink" onClick={logOut}>Sign out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}