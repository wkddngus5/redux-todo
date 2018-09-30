import { connect } from 'react-redux';

import Filter from '../components/Filter';
import { changeFilter } from "../acitons";

const mapStateToProps = state => {
  return {
    filter: state.filter.toString()
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: filter => {
      dispatch(changeFilter(filter))
    }
  }
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
