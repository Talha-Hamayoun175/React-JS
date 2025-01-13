import React from "react";
import GoogleMapComponent from "./googlemapAPI.jsx";


function Google() {
    return (
        <div className="container-fluid p-0 mt-5">
            <h2>Google Map</h2>
            <p>Search Near By Location!</p>
            <div>
            < GoogleMapComponent />
            </div>
        </div>
    );
}

export default Google;
