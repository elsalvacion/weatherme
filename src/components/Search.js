import React from "react";
import { connect } from "react-redux";
import { getWhether } from "../actions/whetherActions";
import "./Search.css";
const Search = ({ getWhether }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter City or Country "
        onChange={(e) => getWhether(e.target.value)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  whetherReducer: state.whetherReducer,
});

export default connect(mapStateToProps, { getWhether })(Search);
