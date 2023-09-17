import { useContext } from 'react'; 
import { UserContext } from './context'; 

function MyChildComponent() { 
  const currentUser = useContext(UserContext); 
  return <span>{currentUser}</span>; 
} 