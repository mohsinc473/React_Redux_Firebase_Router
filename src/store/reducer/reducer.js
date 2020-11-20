const Initial_State = {
  users: [
    {
      name: "Mohsin",
      email: "mohsinsheikh473@gmail.com",
    },
  ],
};

export default (state = Initial_State, action) => {
  // console.log("Action==>",action)
  switch (action.type) {
    case "user":
      return {
        ...state,
        users: [...state.users, action.data],
      };
  }
  return state;
};
