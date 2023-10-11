function CitySearch() { 
    return ( 
       <div> 
        <h2>Find city:</h2> 
        <form> 
            <span> 
                City: 
            </span>
            <input onChange={handleCitySearch} /> 
        </form> 
       </div> 
    ) 
 }