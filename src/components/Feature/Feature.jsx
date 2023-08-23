import React from 'react';

const Feature = ({feature}) => {
    return (
      <div>
        <li className="list-disc ml-8">
            {feature}
        </li>
      </div>
    );
};

export default Feature;