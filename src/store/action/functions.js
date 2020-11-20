const userData = () => {
  return (dispatch) => {
    dispatch({ type: "user", data: {Name:"Ali",Email:"Ali@gmail.com"} });
  };
};

export { facebookLogin };
