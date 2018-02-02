import {connect} from 'react-redux';
import Search from './search';
import {fetchSymbols} from '../../actions/symbol_actions';

const mapStateToProps = (state) => (
  {
    symbols: state.symbols
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchSymbols: (() => dispatch(fetchSymbols()))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
