export function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str, n, suffix = "...") {
  return str.length > n ? str.slice(0, n) + suffix : str;
}

export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}