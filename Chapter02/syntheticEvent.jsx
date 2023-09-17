function Search() { 

    handleInputChange(e) { 
        // 'e' represents synthetic event 
          const nativeEvent = e.nativeEvent; 
          e.stopPropogation(); 
          e.preventDefault(); 
          // Code goes here.. 
    } 
    
    return <input onChange={handleInputChange} /> 
} 