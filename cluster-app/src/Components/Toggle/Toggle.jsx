import PropTypes from "prop-types";
import React, { Component } from "react";
import "./style.css";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentState: props.state || "off",
    };
  }

  handleClick = () => {
    const { currentState } = this.state;
    const newState = currentState === "on" ? "off" : "on";

    this.setState({
      currentState: newState,
    });

    // You can also pass the updated state to a callback function
    // if you want to perform some action when the state changes.
    // this.props.onChange(newState);
  };

  render() {
    const { darkMode, onOffLabels, contrast } = this.props;
    const { currentState } = this.state;

    return (
      <div
        className={`ios-toggle ${onOffLabels} ${currentState} ${darkMode} ${contrast}`}
        onClick={this.handleClick}
      >
        {onOffLabels === "on" && ["on", "off"].includes(currentState) && (
          <div className="off-label" />
        )}

        <div className="knob" />
      </div>
    );
  };
};

Toggle.propTypes = {
  state: PropTypes.oneOf(["on-its-way", "off-its-way", "off", "on"]),
  darkMode: PropTypes.oneOf(["off", "on"]),
  onOffLabels: PropTypes.oneOf(["off", "on"]),
  contrast: PropTypes.oneOf(["off", "on"]),
};

export {Toggle};