import React from 'react';
// import { } from ""



const Modal = ({ img, name, location, date, details, id, handleDelete }) => {
    return (
        <>

            <section class="text-black">
                    <div class="">
                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={img} />
                        <div class="">
                            <p>Location: {location}</p>
                            <p>Date: {date}</p>
                            <h1 class="">{name}</h1>
                            <p class="">{details}</p>
                            <div class="">
                                <button
                                    onClick={() => handleDelete(id)}
                                    class="">Delete
                                </button>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default Modal