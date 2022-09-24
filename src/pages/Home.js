import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { motion } from 'framer-motion';


const loaderVariants = {
  animationOne: {
    x: [ -20, 20 ],
    y: [ 0, -30 ],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}



const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
            const list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() })
            });
            setEvents(list);
            setLoading(false);
        },
            (error) => {
                console.log(error);
            }
        );

        return () => {
            unsub();
        };
    }, []);


    return (
        <>
            <section>
                <section className="body-font">
                    <section className="container px-5 py-12 mx-auto">
                    {loading ? <motion.div variants={loaderVariants} animate="animationOne" className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"></motion.div> : (
                        <article className="flex flex-wrap -m-4">
                            {events && events.map((item) => (
                                <article className="p-4 md:w-1/3 w-full" key={item.id}>
                                    <summary className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.img} alt="event " />
                                        <section className="p-4 text-left">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                                            <p className="leading-relaxed mb-1">Date: {item.date}</p>
                                            <p className="leading-relaxed mb-3">Venue: {item.location}</p>
                                            <Link to={`/fulldetails/${item.id}`} state={{ item }}>
                                                <button className="rounded bg-indigo-500 mt-2 px-2 py-0 outline-none focus:border-o focus:outline-none text-white text-lg">
                                                    View
                                                </button>
                                            </Link>
                                            <button onClick={() => navigate(`/update/${item.id}`)} className="rounded mt-2 ml-2 bg-indigo-500 px-2 py-0 outline-none focus:border-o focus:outline-none text-white text-lg">Edit</button>
                                        </section>
                                    </summary>
                                </article>
                            ))}
                        </article>
                    )}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Home 