class User extends Component { 

    handleUserDetails = () => {   
      console.log("Show User details"); 
    } 
  
    render() { 
      return <button onClick={this.handleUserDetails}>Profile</button>; 
    } 
  
} 