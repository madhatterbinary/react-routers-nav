import React, { Component } from 'react';

class CardDetails extends Component {


  render() {
     
    let {fronttitle, backtitle, description, filesize, fileType } = this.props;
   // console.log('the this.props ', this.props);
    //console.log('the descriptionnnn ', description);
    return (
    <div className="card-container">
        <div className="card-deck mb-4 text-center">
          <div className="card mb-4">
            <div className="card-header">
                <img src={require('../../assets/images/icons/' + fileType + '.png')} alt="powerpoint icon" className="story__img" />
                <h4 className="my-0 font-weight-normal">{fronttitle}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">Details aid <br/><small className="text-muted"> {filesize}</small></h1>
                <button type="button" className="btn btn-lg btn-block btn-outline-primary">{fileType}</button>
              </div>
          </div>

          <div className="card mb-4 back">
              <div className="card-body">
                <div className="description">{description}</div>
                <button type="button" id="back-btn" className="btn btn-lg btn-block btn-outline-primary">DOWNLOAD</button>
              </div>
          </div>
        </div>
    </div>
    );
  }

  handleMouseEnter() {
    this.setState({hovering: true});
  }

  handleMouseLeave () {
    this.setState({hovering: false});
  }

};

export default CardDetails;
