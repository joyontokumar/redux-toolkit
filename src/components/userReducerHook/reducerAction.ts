export const reducerAction = (state: any, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
        firstName: "lata",
        lastName: "rani",
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        firstName: "Roy",
        lastName: "Kumar",
      };
    case "RESET":
      return {
        count: 0,
        firstName: "Kuamr",
        lastName: "",
      };
    default:
      return state;
  }
};
