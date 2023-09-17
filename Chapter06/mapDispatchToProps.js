const mapDispatchToProps = (dispatch) => { 
    return { 
      onCitySelection: (city) => { 
        dispatch(changeCity(city)); 
      }, 
    }; 
};