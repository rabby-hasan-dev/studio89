'use client'

import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = () => {
    const position = [23.820626491316503, 90.37038287534364]
    return (

        <div className='m-0 p-0'>
            <MapContainer className=" h-[400px] w-full lg:w-auto lg:h-[520px] " center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Mirpur,Dhaka 1216, Dhaka, Bangladesh
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    );
};

export default Map;