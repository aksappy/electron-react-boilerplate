// @flow
import React, {Component} from 'react';
import Home from '../components/Home';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppDrawer from '../components/AppDrawer';
import * as DrawerActions from '../actions/drawer';

class HomePage extends Component {
  props : {
    toggleDrawer: () => void,
    toggle: boolean
  };
  render() {
    const {toggle, toggleDrawer} = this.props;
    console.log("before rendering", toggle, toggleDrawer);
    return (
      <div>
        <Home/>
        <AppDrawer toggle={toggle} toggleDrawer = {toggleDrawer}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("From Home Page", state);
  return {toggle: state.toggle};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DrawerActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
