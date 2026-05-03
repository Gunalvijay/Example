export function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function flatten(arr) {
  return arr.flat(Infinity);
}

export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}

/**
 * Combine arrays index-wise
 * @param {...Array} arrays
 * @returns {Array}
 */
export function zip(...arrays) {
  const length = Math.min(...arrays.map(a => a.length));
  return Array.from({ length }, (_, i) =>
    arrays.map(arr => arr[i])
  );
}