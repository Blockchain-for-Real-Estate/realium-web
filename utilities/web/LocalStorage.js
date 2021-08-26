/**
 * @param {String} key
 * @param {String} value
 * @param {Number} hours expiration time in hours
 */
export const setItemWithExpiration = (key, value, hours) => {
  if (typeof window === "undefined") return;
  const NOW = new Date();
  const miliseconds = hours * 60 * 60 * 1000;
  localStorage.setItem(key, value);
  localStorage.setItem(`${key}-expire`, NOW.getTime() + miliseconds);
};

/**
 * @param {String} key
 * @returns Returns the item value if found and not expired
 */
export const getItemWithExpiration = (key) => {
  if (typeof window === "undefined") return;
  const item = localStorage.getItem(key);
  if (!item) return null;

  const expiration = localStorage.getItem(`${key}-expire`);
  if (!expiration) return item;

  const NOW = new Date();
  if (NOW.getTime() > expiration) {
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}-expire`);
    return null;
  } else {
    return item;
  }
};

/**
 * @param {String} key - name of the item to be removed from local storage
 */
export const removeItemWithExpiration = (key) => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
  localStorage.removeItem(`${key}-expire`);
};
