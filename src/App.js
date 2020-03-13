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
    ],
    keyword: "",
    results: []
  };

  matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == "") return false;
    return name == keyword.toLowerCase();
  };

  onSearch = async text => {
    if (text != "") {
      var stockData, data;
      try {
        stockData = await fetch(
          `https://financialmodelingprep.com/api/v3/search?query=${text}&limit=10&exchange=NASDAQ`
        );
        data = await stockData.json();
      } catch (err) {
        console.log(err.message);
      }

      this.setState({ results: data });
    } else this.setState({ results: [] });
  };

  updateField = (field, value, update = true) => {
    if (update) this.onSearch(value);
    this.setState({ [field]: value });
  };
  render() {
    let { results, keyword } = this.state;

    return (
      <div className="App">
        <SearchBar
          results={results}
          keyword={keyword}
          updateField={this.updateField}
        />
      </div>
    );
  }
}

export default App;
