import React, { useEffect, useState } from 'react';

const CountryView = ({ selectedCountry }) => {
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(`https://restcountries.com/v3/name/${selectedCountry}?fullText=true`);
      const data = await response.json();
      setCountryData(data[0]);
      setLoading(false);
    };

    if (selectedCountry) {
      fetchData();
    }
  }, [selectedCountry]);

  if (!selectedCountry) {
    return <p>Please select a country</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>You selected: {selectedCountry}</h2>
      {countryData && (
        <div>
          <p>Population: {countryData.population}</p>
          <p>Area: {countryData.area} km²</p>
          <p>Capital: {countryData.capital}</p>
        </div>
      )}
    </div>
  );
};

export default CountryView;
