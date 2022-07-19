export type DefaultState = {
  num: number;
};
const defaultState: DefaultState = {
  num: 1,
};
export default (state: DefaultState = defaultState) => {
  return state;
};
