import React from 'react';
import {CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({feature}) => {
    return (
      <div className='flex items-center gap-2'>
       
          <CheckCircleIcon className="h-4 w-4 text-green-300" />
          {feature}
       
      </div>
    );
};

export default Feature;