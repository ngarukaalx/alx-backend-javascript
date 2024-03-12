// Track within the weakMap the number of times queryAPI is called for each endpoint
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // check if endpoint has bee called before
  if (!weakMap.has(endpoint)) {
    // in not called before initialize counter
    weakMap.set(endpoint, 0);
  }
  // increament counter for endpoint
  const counter = weakMap.get(endpoint) + 1;
  // update the new value of the endpoint
  weakMap.set(endpoint, counter);

  // check if calls is >= 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
