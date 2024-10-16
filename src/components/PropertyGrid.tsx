import React from 'react'
import { Link } from 'react-router-dom'
import { Property } from '../types/property'
import { FaBed, FaBath, FaCar, FaRuler } from 'react-icons/fa'

interface PropertyGridProps {
  properties: Property[]
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-5 pt-6 pb-6 sm:px-7.5">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Properties</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <Link to={`/skylight/property/${index}`} key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-stroke dark:border-strokedark dark:bg-boxdark">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                    {property.auctionDate ? `Auction ${property.auctionDate}` : 'For sale'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {property.address}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{property.type}</p>
                  <div className="flex items-center space-x-4 mb-2">
                    {property.bedrooms && (
                      <span className="flex items-center text-black dark:text-white">
                        <FaBed className="mr-1" /> {property.bedrooms}
                      </span>
                    )}
                    {property.bathrooms && (
                      <span className="flex items-center text-black dark:text-white">
                        <FaBath className="mr-1" /> {property.bathrooms}
                      </span>
                    )}
                    {property.parking && (
                      <span className="flex items-center text-black dark:text-white">
                        <FaCar className="mr-1" /> {property.parking}
                      </span>
                    )}
                    {property.area && (
                      <span className="flex items-center text-black dark:text-white">
                        <FaRuler className="mr-1" /> {property.area}m²
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {property.daysOnMarket} on market
                  </p>
                  {property.price && (
                    <p className="font-semibold mt-2 text-black dark:text-white">
                      {property.price}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyGrid
