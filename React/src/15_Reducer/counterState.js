export let intialState = 0;
export const reducerFunc = (prev, action) => {
  switch (action) {
    case "incre":
      return prev + 1;
    case "decre":
      if (prev > 0) return prev - 1;
      else return 0;

    case "res":
      return 0;
  }
};
