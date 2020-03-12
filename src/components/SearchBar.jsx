import React, { Component } from "react";
import "./css/SearchBar.css";

class SearchBar extends Component {
  state = {
    results: [],
    keyword: ""
  };

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  //will match keyword with a potenital item in our data array
  matchName = (name, keyword) => {
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == "") return false;
    return name == keyword.toLowerCase();
  };

  updateText = text => {
    this.setState({ keyword: text, visible: false });
  };
  onSearch = text => {
    var visible = true;
    //hide results div if input value is empty
    let { data } = this.props;
    //check to see if we found a match, if so, add it to results
    var results = data.filter(item => true == this.matchName(item.name, text));
    //if we didnt find any match, hide results div
    if (results.length < 1 || this.text == "") visible = false;

    //update state changes
    this.setState({ visible, results, keyword: text });
  };

  cancelSearch = () => {
    this.setState({ visible: false, results: [], keyword: "" });
  };

  render() {
    //renders our results using the SearchPreview component
    var results = this.state.results.map(({ position, name, age }, index) => {
      return (
        <SearchPreview
          key={index}
          updateText={this.updateText}
          index={index}
          position={position}
          name={name}
          age={age}
        />
      );
    });
    return (
      <div className="auto">
        <button
          onClick={() => this.cancelSearch()}
          className={`cancel-btn ${
            this.state.keyword.length > 0 ? "active" : "inactive"
          }`}
        >
          x
        </button>
        <input
          className="search-bar"
          placeholder="Search"
          value={this.state.keyword}
          onChange={e => this.onSearch(e.target.value)}
        />

        {this.state.visible ? (
          <div className="search-results">{results}</div>
        ) : null}
      </div>
    );
  }
}

//stateless component to render preview results
const SearchPreview = ({ age, name, position, index, updateText }) => {
  return (
    <div
      onClick={() => updateText(name)}
      className={`search-preview ${index == 0 ? "start" : ""}`}
    >
      <div className="first">
        <p className="name">{name}</p>
        <p className="sub-header">{position}</p>
      </div>
      <div className="second">
        <p className="age">{age}</p>
        <p className="sub-header">age</p>
      </div>
    </div>
  );
};

export default SearchBar;
