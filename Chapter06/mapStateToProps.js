const mapStateToProps = (state) => {
  return {
    city: state.user.address.city,
  };
};
connect(mapStateToProps)(WeatherReport);
