import { userLogged, userLoading } from "./reducer";

export const userLoggedIn = (data) => async (dispatch) => {
    dispatch(userLogged(data));
};

export const loadingUser = (data) => async (dispatch) => {
    dispatch(userLoading(data));
  };
