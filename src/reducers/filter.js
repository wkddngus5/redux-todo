import { CHANGE_FILTER } from "../acitons";

export default function filter(state = 'ALL', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
}