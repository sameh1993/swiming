
export const getImageUrl = function (img) {
    // const imageUrl = new URL(`/src/assets/video/${img}`, import.meta.url);
    const imageUrl = `/src/assets/images/${img}`;
    return imageUrl;
}

export const validatorState = function(validation) {
    return {
      error: validation.$error,
      dirty: validation.$dirty
    };
  }