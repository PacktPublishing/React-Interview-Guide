class User extends Component { 

    constructor(props) { 
      super(props); 
      this.handleUserDetails = this.handleUserDetails.bind(this); 
    } 
  
    handleUserDetails() { 
      console.log("Show User details"); 
    } 
  
    render() { 
      return <button onClick={this.handleUserDetails}>Profile</button>; 
    } 
  
} 