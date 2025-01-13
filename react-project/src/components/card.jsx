import React from "react";

function Card({productname= "XYZ", price= "0.00", imageSrc, color}) {
    return (
        <div className="group relative">
            <img
                src={imageSrc}
                alt={`Image of ${productname}`}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {productname}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
        </div>
    );
}

export default Card;
