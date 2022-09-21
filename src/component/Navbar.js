import React from 'react';
import { useNavigate, Link } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();


    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/"><h1 class="flex title-font font-medium items-center text-gray-900 text-xl mb-4 md:mb-0">Crud App </h1></Link>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-gray-900">First Link</a>
                </nav>
                <button onClick={() => navigate("/add")}class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Add </button>
            </div>
        </header>
    )
}

export default Navbar