import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  //선택된 나라만 뜨게하는 로직 (선택된 나라는 All에 표시되지 않게 수정)

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry) => selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
      setCountries(
        countries.filter((c) => c.name.common !== country.name.common)
      );
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry) =>
            selectedCountry.name.common !== country.name.common
        )
      );
      setCountries([...countries, country]);
    }
  };

  console.log("countries :", countries);

  return (
    <div>
      <h1>List of selected countries</h1>
      <div>
        {selectedCountries.map((country: Country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelectCountry={handleSelectCountry}
          />
        ))}
      </div>
      <h1>List of all countries</h1>
      <div className="w-50 h-100">
        {countries.map((country: Country) => (
          <CountryCard
            key={country.name.common}
            country={country}
            handleSelectCountry={handleSelectCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
