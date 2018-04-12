import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import CardDetails from '../CardDetails/CardDetails';
import {connect} from 'react-redux';

class PdfCardsPage extends Component {

  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    for (var key in this.props.state.cards[0]) {
      if(key === "pdf") {
        return this.props.state.cards[0][key].map((item, i) => {
           return <CardDetails fileType="pdf" data-index={i} key={i} {...item} />;
        });
      }
    }
  }

  render () {

    return (
      <Aux>
        <div id="powerpoint_files_page">
          <div id="cat-items" className="row">
              {this.renderItems()}
          </div>
        </div>
      </Aux>
    );

  }
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(PdfCardsPage);
