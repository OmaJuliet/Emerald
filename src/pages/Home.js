import React from 'react'

const Home = () => {
    return (
        <>
            <section class="text-gray-600">
                <div class="container px-5 py-8 mx-auto">
                    
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/4 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-40 rounded w-full object-cover object-center mb-6" src="" alt="user" />
                                    <h3 class="text-indigo-500 text-xs font-semibold">Name</h3>
                                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Date</h2>
                                    <p class="leading-relaxed text-base">Location.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home 