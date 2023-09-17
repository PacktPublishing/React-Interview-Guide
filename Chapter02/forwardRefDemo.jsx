import { forwardRef } from 'react'; 

const MySingInButton = forwardRef(function  MySingInButton(props, ref) { 
  const { label, ...otherProps } = props; 

  return ( 
    <label> 
      {label} 
      <button {...otherProps} ref={ref} /> 
    </label> 
  ); 
}); 