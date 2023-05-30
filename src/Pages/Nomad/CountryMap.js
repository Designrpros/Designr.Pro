import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Country from './Country.json'; // Replace this with the path to your country's TopoJSON file

const CountryMap = () => {
  return (
    <ComposableMap>
      <Geographies geography={Country}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
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
  );
};

export default CountryMap;
