import { UserContext } from './userContext'; 

function App() { 
  const value = 'Michael'; 

  return ( 
    <Context.Provider value={value}> 
      <MyParentComponent /> 
    </Context.Provider> 
  ); 
} 