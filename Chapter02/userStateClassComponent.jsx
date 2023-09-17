class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: "Welcome to React world",
      };
    }
  
    render() {
      return (
        <>
          <h1>{this.state.message}</h1>
        </>
      );
    }
  }
  