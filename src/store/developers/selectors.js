export function selectDevs(reduxState) {
  return reduxState.developers.all;
}

export function selectDevsLoading(reduxState) {
  return reduxState.loading;
}
