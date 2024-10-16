import React from 'react'
import PropertyGrid from '../components/PropertyGrid'
import { Property } from '../types/property'

const Properties: React.FC = () => {
  const properties: Property[] = [
    {
      image: '/path/to/image1.jpg',
      address: '20 Midelton Avenue, North Bondi NSW',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      parking: 1,
      auctionDate: 'Thu 7 Nov 2024',
      daysOnMarket: '4d on market',
    },
    // ... more property objects
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Properties</h1>
      <PropertyGrid properties={properties} />
    </div>
  )
}

export default Properties
