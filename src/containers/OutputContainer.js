import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWhether } from "../actions/whetherActions";
import Center from "../components/Center";
import Output from "../components/Output";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
const OutputContainer = ({
  whetherReducer: { loading, whether, errors },
  getWhether,
}) => {
  useEffect(() => {
    getWhether();
    //eslint-disable-next-line
  }, []);

  if (errors) {
    return (
      <Center>
        <Error text={errors} />
      </Center>
    );
  }
  if (loading)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  return <Center>{whether && <Output whether={whether} />}</Center>;
};

const mapStateToProps = (state) => ({
  whetherReducer: state.whetherReducer,
});

export default connect(mapStateToProps, { getWhether })(OutputContainer);
