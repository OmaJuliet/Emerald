import React, { useState, useEffect } from "react";
import { storage, db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const initialState = {
  name: "",
  location: "",
  date: "",
  details: "",
};

const AddEdit = () => {
  const [data, setData] = useState(initialState);
  const { name, location, date, details } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSingleUser = async () => {
      const docRef = doc(db, "events", id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setData({ ...snapshot.data() });
      }
    };
    id && getSingleUser();
  }, [id]);

  // const getSingleUser = async () => {
  //     const docRef = doc(db, "events", id);
  //     const snapshot = await getDoc(docRef);
  //     if (snapshot.exists()) {
  //         setData({ ...snapshot.data() });
  //     }
  // }

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "status_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!location) {
      errors.location = "Location is required";
    }
    if (!date) {
      errors.date = "Date is required";
    }
    if (!details) {
      errors.details = "Details is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    if (!id) {
      try {
        await addDoc(collection(db, "events"), {
          ...data,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(doc(db, "events", id), {
          ...data,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }

    navigate("/eventlist");
  };

  return (
    <section className="lg:w-1/2 md:w-2/3 mx-auto">
      {isSubmit ? (
        <motion.div
          variants={loaderVariants}
          animate="animationOne"
          className="flex flex-col text-center rounded-full w-4 h-4 mx-auto mt-2 lg:mt-2 bg-indigo-500 rounded-full"
        ></motion.div>
      ) : (
        <>
          <h1 className="text-xl text-indigo-500 font-semibold">
            {id ? "Edit event" : "Add new event"}
          </h1>
          <form onSubmit={handleSubmit}>
            <section className="text-gray-600 body-font">
              <section className="container mx-auto flex flex-col px-5 py-2 items-center justify-center">
                <label
                  htmlFor="image"
                  className="leading-7 text-sm text-left text-gray-600"
                >
                  Event Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="my-8"
                />
              </section>
            </section>

            <section className="flex flex-wrap -m-2">
              <article className="p-2 w-1/2">
                <aside className="relative">
                  <label
                    htmlFor="Event Name"
                    className="leading-7 text-left text-sm text-gray-600"
                  >
                    Event Name
                  </label>
                  <input
                    name="name"
                    error={errors.name ? { content: errors.name } : null}
                    onChange={handleChange}
                    value={name}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </aside>
              </article>

              <article className="p-2 w-1/2">
                <aside className="relative">
                  <label
                    htmlFor="Event Location"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Event Location
                  </label>
                  <input
                    name="location"
                    error={
                      errors.location ? { content: errors.location } : null
                    }
                    onChange={handleChange}
                    value={location}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </aside>
              </article>

              <article className="p-2 w-1/2">
                <aside className="relative">
                  <label
                    htmlFor="Event Date"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    error={errors.date ? { content: errors.date } : null}
                    onChange={handleChange}
                    value={date}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </aside>
              </article>

              <article className="p-2 w-full">
                <aside className="relative">
                  <label
                    htmlFor="Event Details"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    error={errors.details ? { content: errors.details } : null}
                    onChange={handleChange}
                    value={details}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-6"
                  ></textarea>
                </aside>
              </article>
              <figure className="p-2 w-full">
                <button
                  type="submit"
                  disabled={progress !== null && progress < 100}
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Add Event
                </button>
              </figure>
            </section>
          </form>
        </>
      )}
    </section>
  );
};

export default AddEdit;
