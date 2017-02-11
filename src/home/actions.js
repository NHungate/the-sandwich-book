export const FETCH_SANDWICHES = 'FETCH_SANDWICHES';
export const FETCH_SANDWICHES_RECEIVED = 'FETCH_SANDWICHES_RECEIVED';

export function getSandwiches() {
  return { type: FETCH_SANDWICHES }
}
