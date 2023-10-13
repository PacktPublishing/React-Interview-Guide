const mapDispatchToProps = (dispatch) => {
  return {
    toggleCity: (city) => {
      dispatch(changeCity(city));
    },
  };
};
