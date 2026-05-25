"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import {
  useEffect,
  useState,
} from "react";

import "leaflet/dist/leaflet.css";

import L from "leaflet";


// FIX DEFAULT MARKER
delete L.Icon.Default.prototype
  ._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});


// BIKE ICON
const bikeIcon =
  new L.Icon({

    iconUrl:
      "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",

    iconSize: [45, 45],

  });


// LOCATIONS
const restaurantPosition =
  [28.6139, 77.2090];

const userPosition =
  [28.7041, 77.1025];


// ROUTE POINTS
const route = [

  [28.6139, 77.2090],

  [28.6200, 77.2150],

  [28.6300, 77.1900],

  [28.6450, 77.1700],

  [28.6600, 77.1500],

  [28.6800, 77.1300],

  [28.7041, 77.1025],

];


export default function LiveTrackingMap() {

  const [
    bikePosition,
    setBikePosition,
  ] = useState(
    route[0]
  );


  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);


  // MOVE BIKE
  useEffect(() => {

    const interval =
      setInterval(() => {

        setCurrentIndex(
          (prev) => {

            const next =
              prev + 1;

            if (
              next <
              route.length
            ) {

              setBikePosition(
                route[next]
              );

              return next;

            }

            return prev;

          }
        );

      }, 3000);

    return () =>
      clearInterval(
        interval
      );

  }, []);


  return (

    <div className="rounded-3xl overflow-hidden shadow-lg mt-10">

      <MapContainer
        center={bikePosition}
        zoom={11}
        scrollWheelZoom={false}
        style={{
          height: "450px",
          width: "100%",
        }}
      >

        {/* MAP */}
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {/* RESTAURANT */}
        <Marker
          position={
            restaurantPosition
          }
        >

          <Popup>

            Restaurant 🍔

          </Popup>

        </Marker>


        {/* MOVING BIKE */}
        <Marker
          position={
            bikePosition
          }
          icon={bikeIcon}
        >

          <Popup>

            Delivery Partner 🚴

          </Popup>

        </Marker>


        {/* USER */}
        <Marker
          position={
            userPosition
          }
        >

          <Popup>

            Your Location 📍

          </Popup>

        </Marker>


        {/* ROUTE */}
        <Polyline
          positions={route}
          color="red"
          weight={5}
        />

      </MapContainer>

    </div>
  );
}