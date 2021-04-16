export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};

export const getRandomImgUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};
