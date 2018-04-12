import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import CardDetails from '../CardDetails/CardDetails';
import {connect} from 'react-redux';
import CardAPI from '../../api/CardAPI';
import sifter from 'sifter';

class AllCardsPage extends Component {

  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }



  render () {

    return (<div>

           </div>
    );

  }
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(AllCardsPage);
