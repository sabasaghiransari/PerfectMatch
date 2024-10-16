import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Property } from '../types/property'
import {
  FaBed,
  FaBath,
  FaCar,
  FaEnvelope,
  FaFile,
  FaChartBar,
  FaEye,
  FaHeart,
} from 'react-icons/fa'

interface PropertyDetailProps {
  properties: Property[]
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ properties }) => {
  const { id } = useParams<{ id: string }>()
  const property = properties.find((p, index) => index.toString() === id)

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/skylight" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Campaigns
      </Link>
      <h1 className="text-3xl font-semibold mb-6 text-black dark:text-white">{property.address}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-stroke dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">19</h2>
            <FaEnvelope className="text-gray-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">Email enquiries</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-stroke dark:border-strokedark dark:bg-boxdark">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">2</h2>
            <FaFile className="text-gray-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">eBrochures/Listing Bumps left</p>
          <p className="text-sm text-gray-500">eBrochure scheduled in 2 days</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-stroke dark:border-strokedark dark:bg-boxdark">
          <img src={property.image} alt={property.address} className="w-full h-48 object-cover" />
          <div className="p-4">
            <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-sm inline-block mb-2">
              Auction {property.auctionDate}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              {property.address}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{property.type}</p>
            <div className="flex items-center space-x-4 mb-2 text-black dark:text-white">
              <span className="flex items-center">
                <FaBed className="mr-1" /> {property.bedrooms}
              </span>
              <span className="flex items-center">
                <FaBath className="mr-1" /> {property.bathrooms}
              </span>
              <span className="flex items-center">
                <FaCar className="mr-1" /> {property.parking}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{property.daysOnMarket}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-stroke dark:border-strokedark dark:bg-boxdark lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaChartBar className="mr-2" /> Market comparable overview
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold">0</h3>
              <p className="text-gray-600 dark:text-gray-400">Listed last 7 days</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">0</h3>
              <p className="text-gray-600 dark:text-gray-400">Sold last 7 days</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">-</h3>
              <p className="text-gray-600 dark:text-gray-400">Avg. days on mkt.</p>
            </div>
          </div>
          <p className="mt-4 text-orange-500 bg-orange-100 px-2 py-1 rounded inline-block">
            No sold comp. last 30 days
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-stroke dark:border-strokedark dark:bg-boxdark lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaEye className="mr-2" /> Listing insights overview - last 7 days
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold">964</h3>
              <p className="text-gray-600 dark:text-gray-400">Views</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">36</h3>
              <p className="text-gray-600 dark:text-gray-400">Enquiries</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">51</h3>
              <p className="text-gray-600 dark:text-gray-400">Shortlisted</p>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
        <FaHeart className="mr-2" /> Promote listing
      </button>
    </div>
  )
}

export default PropertyDetail
