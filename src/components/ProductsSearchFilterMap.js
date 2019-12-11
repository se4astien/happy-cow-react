import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import L from "leaflet";

const ProductsSearchFilterMap = () => {
  let location = useLocation();
  // console.log(location);

  // coordonnées du marker
  const [markersData, setMarkersData] = useState([
    {
      latLng: {
        lat: 48.862881,
        lng: 2.351543
      },
      title: 1
    }
  ]);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [48.862881, 2.351543],
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
    <div className="search-filter-map">
      <div id="map"></div>
    </div>
  );
};

export default ProductsSearchFilterMap;
