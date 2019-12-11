import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router"; // reçoit des données d'un Link
import L from "leaflet";

function CardProductDetailsMap() {
  let location = useLocation();
  // console.log(location);
  // coordonnées du marker
  const [markersData, setMarkersData] = useState([
    {
      latLng: {
        lat: location.state.location.lat,
        lng: location.state.location.lng
      },
      title: 1
    }
  ]);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [location.state.location.lat, location.state.location.lng],
      zoom: 14,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach(marker => {
      L.marker(marker.latLng, { title: marker.title }).addTo(layerRef.current);
    });
  }, [markersData]);

  return (
    <>
      <div className="details-map">
        <div id="map"></div>
        <div className="box">
          <div>
            <div className="features">
              <span>Features</span>
              <div>
                <span>Outdoor seating</span>
                <span>Accepts credit cards</span>
              </div>
            </div>
            <div className="price">
              <span>Price</span>
              <div>
                <span></span>
              </div>
            </div>
            <div className="social">
              <span>Website</span>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProductDetailsMap;
