import React, { useEffect, useRef } from "react";
import L from "leaflet";

function CardProductDetailsMap({ markersData }) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [49.8419, 24.0315],
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
