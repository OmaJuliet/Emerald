import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";


// Function to handle the deletion of an event
// const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this event"))
//         try {
//             await deleteDoc(doc(db, "events", id));
//             setEvents(events.filter((event) => event.id !== id));
//         } catch (err) {
//             console.log(err);
//         }
// }


const handleDelete = async () => {
    alert("Delete functionality is diasbled now");
  };



const EventDetails = () => {
    // Since I'm paasing data from the home page to this page, this is the function that works for router v6
    const { state } = useLocation();

    return (
        <>
            <section>
                <section className="text-gray-600">
                    <section className="container px-5 py-8 lg:py-8 md:py-20 mx-auto flex flex-wrap">
                        <article className="lg:w-1/2 w-full mx-auto">
                            <figure className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                                <img src={state.item.img} className="w-full object-cover h-full lg:h-1/6 object-center block border-gray-500 border-1 absolute inset-0" alt="event" />
                            </figure>

                            <div className="text-left w-full mb-2">
                                <aside>
                                    <h2 className="font-semibold mt-4 mb-0 text-gray-900 text-xl sm:text-2xl">{state.item.name}</h2>
                                    <figure className="w-32 h-1 bg-indigo-500 rounded mt-0 lg:mt-0 mb-4"></figure>
                                    <p className="font-medium mt-2 text-gray-900 text-base sm:text-lg">Date: {state.item.date}</p>
                                    <p className="font-semibold mb-4 text-indigo-500 text-base">Location: {state.item.location}</p>
                                    <aside className="text-base text-black"><span className="text-lg font-medium">Details:</span> {state.item.details}</aside>
                                    <motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgba(99 102 241)" }}
                                        onClick={handleDelete}
                                        className="mx-auto text-indigo-500 border-0 mt-4 py-2 px-4 focus:outline-none border-1 border-indigo-500 hover:bg-white rounded text-lg">Delete
                                    </motion.button>
                                </aside>
                            </div>
                        </article>
                    </section>
                </section>
            </section>
        </>
    );
};

export default EventDetails