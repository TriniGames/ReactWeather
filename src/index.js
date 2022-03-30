import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <p>Latitude: {this.state.lat}</p>
        </div>
      );
    }

    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <p>Error: {this.state.errorMessage}</p>
        </div>
      );
    }

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
