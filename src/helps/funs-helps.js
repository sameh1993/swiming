export const getVedioUrl = function (img) {
  // const imageUrl = new URL(`/src/assets/video/${img}`, import.meta.url);
  const imageUrl = `/src/assets/video/${img}`;
  return imageUrl;
};

export const getImageUrl = function (img) {
  const imageUrl = new URL(`/src/assets/images/${img}`, import.meta.url);
  return imageUrl;
};
