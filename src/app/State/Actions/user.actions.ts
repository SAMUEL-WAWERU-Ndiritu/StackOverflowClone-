import { createAction, props } from "@ngrx/store";
import { LoginSuccess, LoginUser,User } from "../../components/interfaces";

export const loadUser = createAction(
    '[Login Page] Load Users'
  );
  
  
  export const loadSuccess = createAction(
    '[Login Page] Load Users Success',
    props<{ users: User[] }>()
  );
  
  export const login = createAction(
    '[Login Page] User Login',
    props<LoginUser>()
  );
  
  export const loginSuccess = createAction(
    '[Login Page] User Login Success',
    props<LoginSuccess>()
  );
  
  export const loginFailure = createAction(
    '[Login Page] User Login Failure',
    props<{ error: string }>()
  );
export const logout = createAction(
    '[Logout Page] User Logout'
)

export const logoutSuccess = createAction(
    '[Logout Page] User Logout Success'
)

export const logoutFailure = createAction(
    '[Logout Page] User Logout Failure',
    props<{ error: string }>()
)

export const register = createAction(
    '[Register Page] User Register',
    props<User>()
)

export const registerSuccess = createAction(
    '[Register Page] User Register Success',
    props<{ message: string }>()
)

export const registerFailure = createAction(
    '[Register Page] User Register Failure',
    props<{ error: string }>()
)

export const getLogedInUser = createAction(
    '[Get Logged In User] Get Logged In User',
    props<LoginSuccess>()
)

export const UpdateUser = createAction(
    '[Update User] Update User',
    props<User>()
)

export const UpdateUserSuccess = createAction(
    '[Update User] Update User Success',
    props<{ message: string }>()
)

export const UpdateUserFailure = createAction(
    '[Update User] Update User Failure',
    props<{ error: string }>()
)
export function loadUsersSuccess(arg0: { users: unknown; }): any {
    throw new Error("Function not implemented.");
}

export function loadUsersFailure(arg0: { error: any; }): any {
    throw new Error("Function not implemented.");
}

