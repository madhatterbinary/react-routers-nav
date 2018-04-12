import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this);
    }
    updateName () {

    }
    render() {    
        var {searchText, onSetSearchText } = this.props;
        return(
            <div id="search_box">
                <section id="search" className="alt">
                    <div className="inputsearchcontainer">
                    <input id="inputsearch" type="search" ref="searchText" placeholder="Search for files" value={searchText} onChange={() => { var searchText = this.refs.searchText.value; onSetSearchText(searchText);}}/><br />
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      showArchived: state.showArchived,
      searchText: state.searchText
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      onSetSearchText: (searchText) => dispatch(actions.setSearchText(searchText))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
