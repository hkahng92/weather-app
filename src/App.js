import React, { Component } from "react";
//importing components that we created
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

//Below are the neccesary codes to call an API
const API_KEY = "ea70f781ce4247a9442caaa8d38671e8";

class App extends Component {
  state = {
    //we need 5 pieces of states to display. this is the initial state
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  //async await is going to be used. Great way of making http calls and makes making web requests extremely easy
  getWeather = async e => {
    //Without the the code (e.preventDefault();) the page automatically refreshes. that prevents from doing it
    e.preventDefault();
    //fetching user input city and country from Forms.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      //make sure the URL is not the sample one
      //and right now the location in the URL is hardcoded values so it needs to be turned into a Dynamic values
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    //don't directly manipulate the state. use setState.
    //with the if statement, the code will only execute if both city and country are true
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        //b/c weather is returning an array, you also need to indicate the array index as well.
        description: data.weather[0].description,
        //for now error will be untouched up until here.
        err: ""
      });
    } else {
      //if city and country are not inputted, this will be executed
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {/*passing in the state values to Weather.js after you have written the codes below, Weather.js file has the access to those values.*/}
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

