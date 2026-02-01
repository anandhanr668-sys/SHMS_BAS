export const formatDate = (date) =>
  new Date(date).toLocaleDateString();

export const generateId = () =>
  Math.random().toString(36).substring(2, 10);

export const debounce = (fn, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

