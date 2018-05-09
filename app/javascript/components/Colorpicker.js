import React from "react";
import PropTypes from "prop-types";
import { SketchPicker } from "react-color";

class Colorpicker extends React.Component {
  
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (color) => {
    console.log(color.hex);
    document.body.style.background = color.hex;
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