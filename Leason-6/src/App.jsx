import React from 'react'
import DestinationCard from './components/DestinationCard'
import popularDestinations from './data/popularDestinations'

export default function App() {
    return (
        <div>
            <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5" >
                <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2'>
                    <div className="xl:max-w-xl">

                        <img className="h-10" src="/img/logo.svg" alt="Workcation" />
                        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                            src="/img/beach-work.jpg" alt="Women workcationin on the beach" />
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:3xl xl:text-4xl"> You can work form anywhere.
                            <br className="hidden lg:inline" />
                            <span className="text-indigo-500">Take advenatge of it.</span>
                        </h1>
                        <p className="mt-4 sm:mt-8 sm:text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Placeat harum nobis
                            inventore
                            explicabo autem voluptas iure eum commodi eius odit cumque, nulla, dolorum ab voluptatum, doloremque
                            fuga
                            consectetur atque nihil.</p>
                        <div className="mt-4 space-x-1 sm:mt-6">
                            {/* <!-- sm:hover:text-3xl --> */}
                            <a href="#" className="btn btn-primary shadow-lg hover:translate-y-0.5 transform 
                    transition
                    ">Book Your escape</a>
                            <a href="#" className="btn btn-secondary">Learn More</a>
                        </div>

                    </div>
                </div>
                <div className=" hidden relative lg:block 2xl:col-span-3">
                    <img className='absolute inset-0 w-full h-full object-cover object-center' src="/img/beach-work.jpg" alt="Women workcationin on the beach" />
                </div>
            </div>
            <div className='max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8'>
                <h2 className="text-xl text-gray-900">Popular destionations</h2>
                <p className='mt-2 text-gray-600'>A Selection of great work-friendly cities with a log to see and explor</p>
            <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3'>

            {
                popularDestinations.map(destination => {
                    return <DestinationCard destination={destination} key={destination.city} />
                })
            }
            </div>
            </div>
        </div>
    )
}
