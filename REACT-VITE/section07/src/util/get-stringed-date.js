export const getStringedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    date < 10 ? `0${date}` : date
  }`;
};
