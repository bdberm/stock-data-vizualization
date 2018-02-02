import {connect} from 'react-redux';
import Search from './search';
import {fetchSymbols} from '../../actions/symbol_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state) => (
  {
    symbols: Object.values(state.symbols)
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    fetchSymbols: (() => dispatch(fetchSymbols()))
  }
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
