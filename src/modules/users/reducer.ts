import {
  GetUsersActionType,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "modules/users/actions";
import { UsersType } from "modules/users/types";
import { AxiosError } from "axios";

type State = {
  loading: boolean;
  data: UsersType[] | null;
  error: AxiosError | null;
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// 리듀서 함수
export default function users(
  state: State = initialState,
  action: GetUsersActionType
): State {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
