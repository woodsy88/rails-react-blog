import React from "react";
import PropTypes from "prop-types";

import Timestamp from "react-timestamp";

class Article extends React.Component {
  render () {
    return (
      <div>
        <div className="article-title"><a href={this.props.path}>{this.props.title}</a></div>
        <div className="article-body">
          {this.props.description}
          <div className="article-meta-details">
            <small>
              Created by {this.props.author + " "}

              <Timestamp time={this.props.created_at} precision={4} />,
              <div>last updated <Timestamp time={this.props.updated_at} precision={4} /></div>
            </small>  
          </div> 
        </div>       
      </div>
    );
  }

  componentDidMount(){
    // assigning the Article component to self
    var self = this;
      // forceUpdate will force the state of the component to update during the mounting
    setInterval(function(){self.forceUpdate()}, 1000);
  }

  // removes the interval timer continuously counting when user leaves page
  componentWillUnmount(){
    // if our component has a timer set on it
    if (this._timer){
      clearInterval(this._timer);
      this._timer = null;
    }
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
  updated_at: PropTypes.string
};
export default Article
