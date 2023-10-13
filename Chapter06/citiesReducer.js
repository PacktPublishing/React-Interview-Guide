function cities(cities = [], action) {
  switch (action.type) {
    case "ADD_CITY":
      return [
        ...cities,
        {
          name: action.payloadname,
          position: 1,
        },
      ];
    default:
      return cities;
  }
}
