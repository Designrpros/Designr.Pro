import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import World from './World.json';
import styled from 'styled-components';

const MapContainer = styled.div`
  max-width: 800px;
  margin: auto;
`;

const MapComponent = ({ setSelectedCountry }) => {
    const handleCountryClick = (geo) => {
        console.log(geo.properties); // Add this line
        setSelectedCountry(geo.properties.NAME);
      };
      

    

  return (
    <MapContainer>
      <ComposableMap>
        <Geographies geography={World}>
          {({ geographies }) =>
            geographies.map(geo => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => {
                  console.log('Country clicked');
                  handleCountryClick(geo);
                }}
                style={{
                  default: {
                    fill: "#333",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </MapContainer>
  );
};

export default MapComponent;
