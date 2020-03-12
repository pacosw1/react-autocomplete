import SearchBar from "./components/SearchBar";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    data: [
      { name: "Andrew R. Kelly", age: 22, position: "Janitor" },
      { name: "Adrian Sanchez", age: 30, position: "Teacher" },
      { name: "Anderson Brown", age: 25, position: "Principal" },
      { name: "Anna Valio", age: 30, position: "guidance councelor" },
      { name: "Asha Mathews", age: 50, position: "Teacher" },
      { name: "Alicia keys", age: 25, position: "Librarian" },
      { name: "Alexa Dot", age: 30, position: "teacher" },
      { name: "Bob Squarepants", age: 20, position: "secretary" }
    ]
  };
  render() {
    let { data } = this.state;
    return (
      <div className="App">
        <SearchBar data={data} />
      </div>
    );
  }
}

export default App;
