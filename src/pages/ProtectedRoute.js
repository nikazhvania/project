import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.config";
class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.user && (
        <Route
          path={this.props.path}
          component={this.props.component}
          exact={this.props.exact}
        />
      )
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(ProtectedRoute);
