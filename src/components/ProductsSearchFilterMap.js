import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";

const ProductsSearchFilterMap = ({ tab, loading }) => {
  // console.log(tab);
  //console.log(markersData);

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [48.862881, 2.351543],
      zoom: 13,
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
    // console.log("1");
    let markersData = [
      // {
      //   latLng: {
      //     lat: 48.862881,
      //     lng: 2.351543
      //   }
      // }
    ];
    // console.log("2");
    for (let i = 0; i < tab.length; i++) {
      // console.log("3");
      //console.log(tab[i].location);
      markersData.push({
        latLng: tab[i].location
      });
      // console.log("4"); // n'affiche pas
    }
    // console.log("5");
    layerRef.current.clearLayers();
    // console.log("6");

    markersData.forEach(marker => {
      // console.log("7");
      L.marker(marker.latLng).addTo(layerRef.current);
      // console.log("8");
    });
    // console.log("9");
  }, [tab]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="search-filter-map">
      <div id="map"></div>
    </div>
  );
};

export default ProductsSearchFilterMap;
