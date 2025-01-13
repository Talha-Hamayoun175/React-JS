import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './googlemapAPI.css'; // Create a simple CSS file for styling the map

function GoogleMapComponent() {
    const [position, setPosition] = useState({
        lat: 31.5497,  // Default location (Lahore, Pakistan)
        lng: 74.3436
    });

    const mapContainerStyle = {
        width: "100%",
        height: "400px"
    };

    const onMapClick = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setPosition({ lat, lng }); // Update the marker position
    };

    return (
        <div className="map-container">
            <h4>Google Map with Marker</h4>
            <LoadScript googleMapsApiKey="AIzaSyCuTilAfnGfkZtIx0T3qf-eOmWZ_N2LpoY">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={position}
                    zoom={12}
                    onClick={onMapClick} // Update marker position on map click
                >
                    <Marker position={position} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default GoogleMapComponent;
