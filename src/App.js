import React, { Component, Fragment } from 'react';
import styled from "styled-components"
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import busyImgSrc from "./images/busy.jpg"

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const StyledImg = styled.img`
  display:block
  width:150px
  margin: 0 auto;
`

const StyledH3 = styled.h3`
  font-size: 50px;
`

class Index extends Component {
  state = {
    name: ""
  }

  updateName = e => {
    this.setState({ name: e.target.value })
  }

  render () {
    return (
      <Fragment>
        <StyledH3> hi </StyledH3>
        <input type="text" onChange={this.updateName}/>
        <StyledImg src={busyImgSrc} />
        <Link to={`/PAGE1?name=${this.state.name}`}>Go to page 1</Link>
      </Fragment>
    )
  }
}

class Page1 extends Component {
  render () {
    const name = getParameterByName('name')
    return (
      <Fragment>
        <h3> page 1, welcome {name} </h3>
        <Link to="/">Go Home </Link>
      </Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React o maste</h1>
        </header>
        <Router>  
          <Fragment>
            <Route path="/" exact component={Index}/>
            <Route path="/PAGE1" component={Page1}/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;








// const IndexBody = ({ className }) => (
//   <div className={className}>
//     <StyledH3> hi </StyledH3>
//     <input type="text" />
//     <StyledImg src={busyImgSrc} />
//     <StyledImg src={busyImgSrc} />
//     <Link to="/PAGE1">Go to page 1</Link>
//   </div>
// )

// const StyledIndexBody = styled(IndexBody)`
//   color: red !important;

// `
