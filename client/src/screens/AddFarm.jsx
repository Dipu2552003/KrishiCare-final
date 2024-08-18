import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw/dist/leaflet.draw.js";

const AddFarm = () => {
  useEffect(() => {
    let map;

    if (!map) {
      map = L.map("map").setView([51.505, -0.09], 13);
    }

    let userLocation = null;
    let tractorMarker = null;
    let tractorPath = []; // To store tractor positions
    let pathPolyline = null; // Polyline to mark the path
    const drawnItems = L.featureGroup().addTo(map); // Layer group for polygons and markers

    // Custom marker icon for the tractor (truck)
    const tractorIcon = L.icon({
      iconUrl: "./truck.png",
      iconSize: [50, 30],
      iconAnchor: [25, 15],
      popupAnchor: [0, -15],
    });

    // Custom marker icon for regular markers
    const customMarkerIcon = L.icon({
      iconUrl: "./marker.png", // Replace with your custom marker image
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41],
    });

    // Add OpenStreetMap tiles
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Locate user and place a tractor marker at their location
    map.locate({ setView: true, maxZoom: 16 });

    map.on("locationfound", (e) => {
      userLocation = e.latlng;
      tractorMarker = L.marker(userLocation, { icon: tractorIcon })
        .addTo(map)
        .bindPopup("You are here!")
        .openPopup();

      // Initialize tractor path with starting location
      tractorPath.push(userLocation);
    });

    map.on("locationerror", (e) => {
      alert(e.message);
    });

    // Keyboard event listener to move the tractor icon and draw the path
    const handleKeyDown = (event) => {
      if (!tractorMarker) return;

      let { lat, lng } = tractorMarker.getLatLng();
      const moveBy = 0.001; // Movement step size (adjust as needed)

      switch (event.key) {
        case "ArrowUp": // Move up
          lat += moveBy;
          break;
        case "ArrowDown": // Move down
          lat -= moveBy;
          break;
        case "ArrowLeft": // Move left
          lng -= moveBy;
          break;
        case "ArrowRight": // Move right
          lng += moveBy;
          break;
        default:
          return; // Ignore other keys
      }

      // Update tractor marker position
      const newLatLng = [lat, lng];
      tractorMarker.setLatLng(newLatLng);

      // Add new position to tractorPath array
      tractorPath.push(newLatLng);

      // Draw the blue path by adding a polyline for the updated positions
      if (pathPolyline) {
        map.removeLayer(pathPolyline); // Remove the old polyline
      }

      pathPolyline = L.polyline(tractorPath, { color: "blue" }).addTo(map); // Add new polyline

      // Optionally, update map view to keep the marker in view
      map.setView(newLatLng, map.getZoom());
    };

    document.addEventListener("keydown", handleKeyDown);

    // Leaflet Draw Control for Polygon Drawing and Marker Placement
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
        poly: {
          allowIntersection: false,
        },
      },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true,
          shapeOptions: {
            color: "blue",
          },
        },
        marker: {
          icon: customMarkerIcon, // Use the custom marker icon
        },
      },
    });

    map.addControl(drawControl);

    // Event to handle the creation of polygons and markers
    map.on(L.Draw.Event.CREATED, (event) => {
      const layer = event.layer;

      if (layer instanceof L.Polygon) {
        createAreaTooltip(layer);
      } else if (layer instanceof L.Marker) {
        layer.bindPopup("Custom marker added!");
      }

      drawnItems.addLayer(layer); // Add the polygon or marker to the drawn items layer
    });

    // Function to add area tooltips for polygons
    const createAreaTooltip = (layer) => {
      if (layer.areaTooltip) return;

      layer.areaTooltip = L.tooltip({
        permanent: true,
        direction: "center",
        className: "area-tooltip",
      });

      layer.on("remove", () => {
        layer.areaTooltip.remove();
      });

      layer.on("add", () => {
        updateAreaTooltip(layer);
        layer.areaTooltip.addTo(map);
      });

      if (map.hasLayer(layer)) {
        updateAreaTooltip(layer);
        layer.areaTooltip.addTo(map);
      }
    };

    // Update the area tooltip with the polygon's area
    const updateAreaTooltip = (layer) => {
      const area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
      const readableArea = L.GeometryUtil.readableArea(area, true);
      const latlng = layer.getCenter();

      layer.areaTooltip.setContent(readableArea).setLatLng(latlng);
    };

    return () => {
      if (map) {
        map.off();
        map.remove();
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div id="map" style={{ height: "100vh" }}></div>;
};

export default AddFarm;
