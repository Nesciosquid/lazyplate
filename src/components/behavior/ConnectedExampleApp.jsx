import { connect } from 'react-redux';
import ExampleApp from '../presentation/ExampleApp.jsx';

const mapStateToProps = (state) => ({
  number: state.storedNumber,
  text: state.storedText,
});

const mapDispatchToProps = (dispatch) => ({
  numberUp: () => dispatch({ type: 'STORED_NUMBER_INCREASE' }),
  numberDown: () => dispatch({ type: 'STORED_NUMBER_DECREASE' }),
  setText: (newText) => dispatch({ type: 'STORED_TEXT_CHANGE', text: newText }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApp);
