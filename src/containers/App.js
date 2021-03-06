import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { updateCounter as updateCounterAction } from '../redux/counter';

export const App = (props) => {
  const { count, updateCounter } = props;
  return (
    <div>
      <Counter
        count={count}
        onClick={updateCounter}
      />
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number,
  updateCounter: PropTypes.func
};

const selector = state => ({
  count: state.counter,
  user: state.user
});

const dispatcher = dispatch => ({
  updateCounter: count => dispatch(updateCounterAction(count))
});

export default connect(selector, dispatcher)(App);
