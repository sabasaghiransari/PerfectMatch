import { Property } from '../types/property'

import property0 from '../images/properties/p0.jpeg'
import property1 from '../images/properties/p1.jpeg'
import property2 from '../images/properties/p2.jpeg'
import property3 from '../images/properties/p3.jpeg'
import property4 from '../images/properties/p4.jpeg'
import property5 from '../images/properties/p5.jpeg'

export const properties: Property[] = [
  {
    image: property0,
    address: '20 Midelton Avenue, North Bondi NSW',
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    parking: 1,
    auctionDate: 'Thu 7 Nov 2024',
    daysOnMarket: '4d on market',
  },
  {
    image: property1,
    address: '8/44 Military Road, North Bondi NSW',
    type: 'Apartment / Unit / Flat',
    bedrooms: 1,
    bathrooms: 1,
    auctionDate: 'Thu 7 Nov 2024',
    daysOnMarket: '4d on market',
  },
  {
    image: property2,
    address: "141 O'Sullivan Road, Bellevue Hill NSW",
    type: 'House',
    bedrooms: 3,
    bathrooms: 1,
    parking: 1,
    auctionDate: 'Wed 30 Oct 2024',
    daysOnMarket: '5d on market',
  },
  {
    image: property3,
    address: '25 Brighton Boulevard, Bondi Beach NSW',
    type: 'House',
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: 240,
    daysOnMarket: '5d on market',
    price: 'For Sale',
  },
  {
    image: property4,
    address: '13 Shaw Street, North Bondi NSW',
    type: 'House',
    bedrooms: 4,
    bathrooms: 2,
    parking: 1,
    area: 240,
    auctionDate: 'Sat 2 Nov 2024',
    daysOnMarket: '6d on market',
    price: 'Buyers Guide | $3,500,000',
  },
  {
    image: property5,
    address: '6/89 Ocean Street, Woollahra NSW',
    type: 'Apartment / Unit / Flat',
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    auctionDate: 'Thu 7 Nov 2024',
    daysOnMarket: '6d on market',
  },
]
