import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";

function CardProductDetailsMap({ latitude, longitude, price, website }) {
  // coordonnées du marker
  const [markersData, setMarkersData] = useState([
    {
      latLng: {
        lat: latitude,
        lng: longitude
      },
      title: 1
    }
  ]);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [latitude, longitude],
      zoom: 16,
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
                <br />
                <span>Accepts credit cards</span>
              </div>
            </div>
            <div className="price">
              <span>{price}</span>
              <div>
                <span></span>
              </div>
            </div>
            <div className="social">
              <span>{website}</span>
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
