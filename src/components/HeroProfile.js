import React, { Component } from "react";

export default class HeroProfile extends Component {
  render() {
    return <div>HeroProfile {this.props.match.params.id}</div>;
  }
}
