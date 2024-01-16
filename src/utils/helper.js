export function debounce(fn, delay = 1000) {
  let timeoutID;

  return function (...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn(...args), delay);
  };
}
