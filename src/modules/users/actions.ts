import { AxiosError } from "axios";
import { UsersType } from "modules/users/types";

// 액션
export const GET_USERS_START = "users/GET_USERS_START" as const;
export const GET_USERS_SUCCESS = "users/GET_USERS_SUCCESS" as const;
export const GET_USERS_ERROR = "users/GET_USERS_ERROR" as const;

// 액션 함수 (액션 객체)
export const getUsersStart = () => ({
  type: GET_USERS_START,
});

export const getUsersSuccess = (users: UsersType[]) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = (error: AxiosError) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

// 액션 함수 타입
export type GetUsersActionType =
  | ReturnType<typeof getUsersStart>
  | ReturnType<typeof getUsersSuccess>
  | ReturnType<typeof getUsersError>;
