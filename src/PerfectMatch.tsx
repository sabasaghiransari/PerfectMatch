import { useState } from 'react';
import './css/style.css';
import prop1 from './images/shortlist/Prop1.png';
import prop2 from './images/shortlist/Prop2.png';
import prop3 from './images/shortlist/Prop3.png';

// Interface for property data
interface Property {
    id: number;
    title: string;
    priceRange: string;
    address: string;
    image: string;
    rating: number;
    comments: string;
    url: string;
}

// Example properties data
const properties: Property[] = [
    {
        id: 1,
        title: '104/29-35 Burlington Road, Homebush NSW 2140',
        priceRange: '$758,000 - $788,000',
        address: 'Homebush NSW 2140',
        image: prop1, // Add your image URL here
        rating: 5,
        comments: 'LOVED this apartment, the design was incredible!',
        url: 'https://www.domain.com.au/104-29-35-burlington-road-homebush-nsw-2140-2019539829',
    },
    {
        id: 2,
        title: 'Level 6, 63/172-176 Parramatta Road, Homebush NSW 2140',
        priceRange: '$620,000 - $650,000',
        address: 'Homebush NSW 2140',
        image: prop2, // Add your image URL here
        rating: 3,
        comments: 'Had a weird vibe',
        url: 'https://www.domain.com.au/level-6-63-172-176-parramatta-road-homebush-nsw-2140-2019552786'

    },
    {
        id: 3,
        title: '501/7-11 Derowie Avenue, Homebush NSW 2140',
        priceRange: 'For Sale | Just Listed',
        address: 'Homebush NSW 2140',
        image: prop3, // Add your image URL here
        rating: 4,
        comments: '',
        url: 'https://www.domain.com.au/501-7-11-derowie-avenue-homebush-nsw-2140-2019556729',
    },
];


const PerfectMatch: React.FC = () => {
    const [selectedUrl, setSelectedUrl] = useState<string>(properties[0].url);

    const handlePropertyClick = (property: Property) => {
        setSelectedUrl(property.url); // Update the URL to load in the iframe

    };

    return (
        <div>
            <div className="dashboard-container">
                {/* Left Side: Static Property List */}
                <div className="property-list">
                    {properties.map((property, index) => (
                        <div key={property.id} className="property-card" onClick={() => handlePropertyClick(property, index)}>
                            <img src={property.image} alt={property.title} />
                        </div>
                    ))}
                </div>

                {/* Right Side: Embedded Website via iframe */}
                <div className="iframe-panel">
                    <iframe src={selectedUrl} title="External Website" className="iframe-content"></iframe>
                </div>
            </div>
        </div>
    );
};

export default PerfectMatch;

