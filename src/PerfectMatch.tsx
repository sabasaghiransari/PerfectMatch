import { useState } from 'react';
import './css/style.css';
import prop1 from './images/shortlist/Prop1.png';
import prop2 from './images/shortlist/Prop2.png';
import prop3 from './images/shortlist/Prop3.png';
import prop4 from './images/shortlist/Prop4.png';
import prop5 from './images/shortlist/Prop5.png';
import prop6 from './images/shortlist/Prop6.png';

// Interface for property data
interface Property {
    id: number;
    title: string;
    image: string;
    url: string;
}

// Example properties data
const properties: Property[] = [
    {
        id: 1,
        title: '104/29-35 Burlington Road, Homebush NSW 2140',
        image: prop1, // Add your image URL here
        url: 'https://www.domain.com.au',
    },
    {
        id: 2,
        title: '10-14 Smallwood Avenue, Homebush NSW 2140',
        image: prop2, // Add your image URL here
        url: 'https://www.domain.com.au'

    },
    {
        id: 3,
        title: 'Level 6, 63/172-176 Parramatta Road, Homebush NSW 2140',
        image: prop3, // Add your image URL here
        url: 'https://www.domain.com.au',
    },
    {
        id: 4,
        title: '58/170 Parramatta Road, Homebush NSW 2140',
        image: prop4, // Add your image URL here
        url: 'https://www.domain.com.au',
    },
    {
        id: 5,
        title: '501/7-11 Derowie Avenue, Homebush NSW 2140',
        image: prop5, // Add your image URL here
        url: 'https://www.domain.com.au'

    },
    {
        id: 6,
        title: '511/4-8 Smallwood Avenue, Homebush NSW 2140',
        image: prop6, // Add your image URL here
        url: 'https://www.domain.com.au',
    }
];


const PerfectMatch: React.FC = () => {
    const [selectedUrl, setSelectedUrl] = useState<string>(properties[0].url);

    const handlePropertyClick = (property: Property) => {
        setSelectedUrl(property.url);
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

