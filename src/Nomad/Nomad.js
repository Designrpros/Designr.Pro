import React, { useState } from 'react';
import MapComponent from './MapComponent';
import CountryView from './CountryView';

const Nomad = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <h1>Nomad</h1>
      <MapComponent setSelectedCountry={setSelectedCountry} />
      <CountryView selectedCountry={selectedCountry} />
    </div>
  );
};

export default Nomad;
