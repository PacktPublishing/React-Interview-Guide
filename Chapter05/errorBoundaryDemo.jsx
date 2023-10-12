class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isErrorThrown: false };
  }

  static getDerivedStateFromError(error) {
    return { isErrorThrown: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToReportingService(error, errorInfo);
  }

  render() {
    if (this.state.isErrorThrown) {
      return <h1>Oops, the application is unavaialble.</h1>;
    }
    return this.props.children;
  }
}
