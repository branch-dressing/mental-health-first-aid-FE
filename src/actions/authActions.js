import { getUpdateUser, logoutUser } from '../services/authServices'; 
import { setPositiveLogout } from './positiveActions';
import { setMoodLogout } from './moodActions';
import { setEventLogout } from './eventActions';

export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_DONE = 'SET_SESSION_DONE';
export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const setSessionLoading = () => ({ type: SET_SESSION_LOADING });
export const setSessionDone = () => ({ type: SET_SESSION_DONE });
export const setSession = user => ({ 
  type: SET_SESSION,
  payload: user 
});
export const setSessionError = error => ({ 
  type: SET_SESSION_ERROR,
  payload: error
});

export const authorizeUser = (body, authFunction) => dispatch => {
  dispatch(setSessionLoading());
  return authFunction(body)
    .then(user => {
      dispatch(setSession(user));
      dispatch(setSessionDone());
      return user;
    })
    .catch(authError => dispatch(setSessionError(authError)));
};

export const updateUser = body => dispatch => {
  dispatch(setSessionLoading());
  return getUpdateUser(body)
    .then(user => {
      dispatch(setSession(user));
      return dispatch(setSessionDone());
    })
    .catch(authError => dispatch(setSessionError(authError)));
};

export const fetchLogoutUser = () => dispatch => {
  dispatch(setSessionLoading());
  return logoutUser()
    .then(() => {
      dispatch(setSession(null));
      dispatch(setPositiveLogout());
      dispatch(setMoodLogout());
      dispatch(setEventLogout());
      return dispatch(setSessionDone());
    })
    .catch(authError => dispatch({ type: SET_SESSION_ERROR, payload: authError }));
};

