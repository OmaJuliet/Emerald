import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import Modal from '../component/Modal';


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
            <section className="text-gray-600">
                <div className="container px-5 py-8">
                    <div className="flex flex-wrap">
                        {events && events.map((item) => (
                            <div className="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
                                <div className="p-6 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center" src={item.img} alt="event" />
                                    <h3 className="">Name: { item.name }</h3>
                                    <h2 className="">location: { item.location }</h2>
                                    <p className="">date: {item.date } </p>
                                    <button onClick={() => navigate(`/update/${item.id}`)} className="rounded bg-blue-500 px-2 py-0 text-white text-lg">Update</button>
                                    <Link to={`/events/${item.id}`}><button 
                                      className="rounded bg-blue-500 px-2 py-0 text-white ml-2 text-lg">View full details</button>
                                    </Link>
                                </div>
                            </div>
                        ))} 

                    </div>


                </div>
            </section>
        </>
    )
}

export default Home 