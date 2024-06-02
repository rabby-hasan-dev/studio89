'use client'

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const Map = () => {
    const position = [23.820626491316503, 90.37038287534364]
    const myIcon = L.icon({
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFYCzrT8ZAbe_J0mAA1tAVPjm5zA4i7r4jw&s',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: 'my-icon-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
    return (

        <div className='m-0 p-0'>
            <MapContainer className=" h-[400px] w-full lg:w-auto lg:h-[520px] " center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon} >
                    <Popup>
                        Mirpur,Dhaka 1216, Dhaka, Bangladesh
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    );
};

export default Map;