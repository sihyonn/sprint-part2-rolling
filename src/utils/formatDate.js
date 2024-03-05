export const formatDateToYYYYMMDD = (createdAt) => {
  const dateObject = new Date(createdAt);

  const year = dateObject.getFullYear();
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObject.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
};
