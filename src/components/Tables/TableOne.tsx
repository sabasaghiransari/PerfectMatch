import React from 'react'
import { Property } from '../../types/property'

const propertyData: Property[] = [
  {
    address: '20 Midelton Avenue, North Bondi NSW 2026',
    type: 'House',
    daysOnMarket: 4,
    saleType: 'Auction',
  },
  {
    address: '25 Brighton Boulevard, Bondi Beach NSW 2026',
    type: 'House',
    daysOnMarket: 5,
    saleType: 'For Sale',
  },
  {
    address: '6/89 Ocean Street, Woollahra NSW 2025',
    type: 'Apartment / Unit / Flat',
    daysOnMarket: 6,
    saleType: 'Auction',
  },
  {
    address: '1712/1 Kings Cross Road, Darlinghurst NSW 2010',
    type: 'Apartment / Unit / Flat',
    daysOnMarket: 7,
    saleType: 'For Sale',
  },
  {
    address: 'Willow, Bellevue Hill NSW 2023',
    type: 'New apartments / off the plan',
    daysOnMarket: 14,
    saleType: 'For Sale',
  },
]

const TableOne: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Properties</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Address</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Type</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Days on Market</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Sale Type</h5>
          </div>
        </div>

        {propertyData.map((property, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              key === propertyData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">{property.address}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{property.type}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{property.daysOnMarket}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{property.saleType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TableOne
