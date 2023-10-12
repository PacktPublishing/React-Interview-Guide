const filterCities = useMemo(
  () => filteredCities(city, country),
  [city, country]
);
