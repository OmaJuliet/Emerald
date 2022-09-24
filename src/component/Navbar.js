import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
    const navigate = useNavigate();


    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className={toggle ? 'navbar expanded' : 'navbar'}>
                <h2 className='logo'>Rez</h2>
                <figure className='toggle-icon' onClick={handleToggle}>
                    {toggle ? <p className="menu-close">X</p> : <FaBars />}
                </figure>
                <ul className='links'>
                    <Link to="/" id="active"><li>Home</li></Link>
                    <Link to="/eventlist"><li>Events</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <div className="btn-content"><button onClick={() => navigate("/add")} className="btn">Add Event</button></div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar


