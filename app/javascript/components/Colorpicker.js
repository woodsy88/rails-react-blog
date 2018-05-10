import React from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

class Colorpicker extends React.Component {
  
  constructor(props){
    super(props);
                  
    this.state = { selector: props.selector }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    console.log(color.hex);

    // set backgorund style of body to value of color
    document.body.style.background = color.hex;

    // ---------------------------------------------------
    // THEN - above part and below part not really related

    // select the form input, and pass it an id from state
    let input_element = document.querySelector('#'+this.state.selector)

    // make the value of the dom element = to the hex color being passed in as a parameter
    input_element.value = color.hex
  }
  
  render() {
    return (
      <div>
          <SketchPicker color={this.props.color} 
                        onChange={this.handleChange}
          />;
      </div>
    );
  }
}

Colorpicker.propTypes = {

};

export default Colorpicker;