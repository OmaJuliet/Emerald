import {
  FaCloudDownloadAlt,
  FaUsers,
  FaStar,
  FaUserCheck,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "../images/plan.jpg";
import event1 from "../images/Baby Shower event.jpg";
import event2 from "../images/Birthday event.jpg";
import event3 from "../images/concert event.jpg";
import event4 from "../images/conference event.jpg";
import event5 from "../images/Graduation event.jpg";
import event6 from "../images/Hangout event.jpg";
import { motion } from "framer-motion";
import img1 from "../images/test1.jpg";
import img2 from "../images/test2.jpg";



const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Page = () => {

  return (
    <>
      <section>
        <section className="">
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="container mx-auto flex px-5 py-8 lg:py-12 md:flex-row flex-col items-center"
          >
            <section className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="sm:text-3xl text-2xl mb-2 font-medium text-indigo-600">
                Schedule your events
                <br className="hidden lg:inline-block" /> the easy way
              </h1>
              <p className="mb-12 text-left text-base">
                You get to plan your events and automatically get notified close
                to your event date. A perfect site and app for event planners
                and basically anybody who likes to get their events planned out
                ahead of time. Now, you can't say you forgot that special day!!
              </p>

              <aside className="flex justify-center">
                <Link to="/add">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 5px rgba(99 102 241)",
                    }}
                    className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded-full text-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </aside>
            </section>

            <figure className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="event"
                src={hero}
              />
            </figure>
          </motion.section>
        </section>
      </section>

      {/* Gallery Section */}
      <section className="text-gray-600 body-font">
        <section className="container px-5 py-24 mx-auto flex flex-wrap">
          <article className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Events
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Make plans for future events; birthdays, graduation, conferences,
              parties and lots more.
            </p>
          </article>
          <aside className="flex flex-wrap md:-m-2 -m-1">
            <figure className="flex flex-wrap w-1/2">
              <figure className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={event4}
                />
              </figure>
              <figure className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={event5}
                />
              </figure>
              <figure className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={event6}
                />
              </figure>
            </figure>
            <figure className="flex flex-wrap w-1/2">
              <figure className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={event1}
                />
              </figure>
              <figure className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={event2}
                />
              </figure>
              <figure className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={event3}
                />
              </figure>
            </figure>
          </aside>
        </section>
      </section>

      {/* Statistics Section */}
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6">
                <FaStar className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                <h2 className="font-medium text-3xl text-black">2.2K</h2>
                <p className="leading-relaxed text-gray-600">Reviews</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <FaUsers className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                <h2 className="font-medium text-3xl text-black">3.1K</h2>
                <p className="leading-relaxed text-gray-600">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <FaCloudDownloadAlt className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                <h2 className="font-medium text-3xl text-black">3.12K</h2>
                <p className="leading-relaxed text-gray-600">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div
                animate={{ boxShadow: "0px 0px 8px rgba(99 102 241)" }}
                className="px-4 py-6 rounded-lg"
              >
                <FaUserCheck className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
                <h2 className="font-medium text-3xl text-black">Stat</h2>
                <p className="leading-relaxed text-gray-600">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="">
        <section className="container px-5 py-24 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <article className="flex flex-wrap -m-4">
            <article className="p-4 md:w-1/2 w-full">
              <figure className="h-full bg-gray-100 p-6 text-left rounded">
                <aside className="flex flex-row lg:items-left">
                  <img src={img1} className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center" alt="face" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-lg font-medium text-gray-900">Eric Uwimana</span>
                    <span className="flex flex-row text-orange-500 my-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    <span className="text-gray-700 text-base">Rwanda</span>
                  </span>
                </aside>
                <p className="leading-relaxed mb-2 mt-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia purus vitae dui scelerisque, at faucibus mauris pellentesque.</p>
              </figure>
            </article>

            <article className="p-4 md:w-1/2 w-full">
              <figure className="h-full bg-gray-100 p-6 text-left rounded">
                <aside className="flex flex-row lg:items-left">
                  <img src={img2} className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center" alt="face" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-lg font-medium text-gray-900">Isabella Ricci</span>
                    <span className="flex flex-row text-orange-500 my-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    <span className="text-gray-700 text-base">Italy</span>
                  </span>
                </aside>
                <p className="leading-relaxed mb-2 mt-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia purus vitae dui scelerisque, at faucibus mauris pellentesque.</p>
              </figure>
            </article>
          </article>
        </section>
      </section>

      {/* Footer Section */}
      <footer>
        <aside className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-black">
            <span className="ml-3 text-xl">Emerald</span>
          </h1>
          <p className="text-sm text-gray-700 sm:ml-0 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
            © 2022 All rights reserved
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link to="" className="text-indigo-500 cursor-pointer">
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-indigo-500 cursor-pointer">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-indigo-500 cursor-pointer">
              <FaFacebookF className="w-5 h-5" />
            </Link>
            <Link to="" className="ml-3 text-indigo-500 cursor-pointer">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </span>
        </aside>
      </footer>
    </>
  );
};

export default Page;
