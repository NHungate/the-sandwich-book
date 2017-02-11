export const FETCH_SANDWICH = 'FETCH_SANDWICH';
export const FETCH_SANDWICH_RECEIVED = 'FETCH_SANDWICH_RECEIVED';

export const fetchSandwich = (id) => {
  return {
    type: FETCH_SANDWICH,
    payload: id
  };
};
