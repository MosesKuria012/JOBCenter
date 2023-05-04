import React, { useState } from 'react';

function ServiceCard({service}) {
    const [showDetails, setShowDetails] = useState(false);

    const handleCardClick = () => {
        setShowDetails(! showDetails);
    }


    return (
        <div className='service-card' onClick={handleCardClick}>
            <h2>{service.title}</h2>
            <p> <strong>Location:</strong>{service.location}</p>
            <p><strong>Price:</strong>{service.salary}</p>

            {showDetails && (
        <div>
          <p>
            <strong>Contact:</strong> <i>Email:</i> {service.contact.email}
            <i>Phone:</i> {service.contact.phone}
          </p>
          
          <p>
            <strong>Description:</strong> {service.description}
          </p>
        </div>
      )}
        </div>
    );
}

export default ServiceCard;