function CitySearch() { 
    return ( 
       <> 
        <h2>Find city:</h2> 
        <form> 
            <label> 
                City: 
                <input onChange={handleCitySearch} /> 
            </label> 
        </form> 
       </> 
    ) 
 }