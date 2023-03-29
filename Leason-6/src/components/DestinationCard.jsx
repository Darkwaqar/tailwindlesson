import React from 'react'

export default function DestinationCard({destination}) {
  return (
    <div className='flex item-center rounded-lg bg-white shadow-lg overflow-hidden'>
        <img className='h-32 w-32' src={destination.imageUrl} alt="" />
        <div className='px-6 py-4'>
            <h3 className='text-lg font-semibold text-gray-800'>{destination.city}</h3>
            <p className='text-grey-600'>{destination.averagePrice} / night average</p>
            <div className='mt-4'>
                <a  href="#" className='text-indigo-500 hover:text-indigo-400
                font-semibold text-sm'>Explore {destination.propertyCount} Properties</a>
            </div>
        </div>
    </div>
  )
}
