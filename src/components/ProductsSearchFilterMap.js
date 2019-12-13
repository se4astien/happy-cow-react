import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";

const ProductsSearchFilterMap = ({ tab, loading }) => {
  console.log(tab); // affiche mon objet tab

  //console.log(markersData);

  // console.log(tab.name); // affiche mon objet tab

  // let coord;
  //let newTab = [];

  // // 1. On parcourt l'objet keys
  // const keys = Object.keys(tab);
  // for (let i = 0; i < keys.length; i++) {
  //   const key = keys[i];
  //   // coord = tab[key].location;
  //   // console.log(coord); // {lng: 2.358393, lat: 48.861446}
  //   newTab.push(tab[key].location);
  //   // console.log(newTab[i].lat);
  // }

  // console.log(newTab);

  // coordonnées du marker

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
    console.log("1");
    let markersData = [
      // {
      //   latLng: {
      //     lat: 48.862881,
      //     lng: 2.351543
      //   }
      // }
    ];
    console.log("2");
    console.log(tab);
    for (let i = 0; i < tab.length; i++) {
      console.log("3");
      //console.log(tab[i].location);
      markersData.push({
        latLng: tab[i].location
      });
      console.log("4");
    }
    console.log("5");
    layerRef.current.clearLayers();
    console.log("6");

    markersData.forEach(marker => {
      // console.log("7");
      L.marker(marker.latLng).addTo(layerRef.current);
      // console.log("8");
    });
    console.log("9");
  }, [tab]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div
        onClick={() => {
          // console.log(tab && tab[1].name); // dès que tu as trouvé tab, vas chercher tab[1].name
          console.log(tab.name);
        }}
      >
        Se connecter
      </div>
      <div className="search-filter-map">
        <div id="map"></div>
      </div>
    </>
  );
};

export default ProductsSearchFilterMap;
