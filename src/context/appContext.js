import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import {
   DISPLAY_ALERT,
   CLEAR_ALERT,
   SETUP_USER_BEGIN,
   SETUP_USER_SUCCESS,
   SETUP_USER_ERROR,
   TOGGLE_SIDEBAR,
   LOGOUT_USER,
   UPDATE_USER_BEGIN,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_ERROR,
   HANDLE_CHANGE,
   CLEAR_VALUES,
   CREATE_JOB_BEGIN,
   CREATE_JOB_SUCCESS,
   CREATE_JOB_ERROR,
   GET_JOBS_BEGIN,
   GET_JOBS_SUCCESS,
   SET_EDIT_JOB,
   DELETE_JOB_BEGIN,
   EDIT_JOB_BEGIN,
   EDIT_JOB_SUCCESS,
   EDIT_JOB_ERROR,
   SHOW_STATS_BEGIN,
   SHOW_STATS_SUCCESS,
   CLEAR_FILTERS,
   CHANGE_PAGE,
   OPEN_MODAL,
   CLOSE_MODAL,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
   showSidebar: false,
   showModal: false,
   isLoading: false,
   isMember: false,
   isEditing: false,
   showAlert: false,
   totalJobs: 0,
   jobs: [],
   alertText: "",
   alertType: "",
   user: user ? JSON.parse(user) : null,
   token: token,
   editJobId: "",
   position: "",
   company: "",
   jobLocation: "",
   jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
   jobType: "full-time",
   statusOptions: ["interview", "declined", "pending"],
   status: "pending",
   numOfPages: 1,
   page: 1,
   stats: {},
   monthlyApplications: [],
   search: "",
   searchStatus: "all",
   searchType: "all",
   sort: "latest",
   sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   // Set axios URL
   const authFetch = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
   });

   // Set Request
   authFetch.interceptors.request.use(
      (config) => {
         config.headers.common["Authotization "] = `Bearer ${state.token}`;
         return config;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   // Set Response
   authFetch.interceptors.response.use(
      (response) => {
         return response;
      },
      (error) => {
         if (error.response.status === 401) {
            logoutUser();
         }
         return Promise.reject(error);
      }
   );

   // Show Alert
   const displayAlert = () => {
      dispatch({ type: DISPLAY_ALERT });
      clearAlert();
   };

   // Clear Alert
   const clearAlert = () => {
      setTimeout(() => {
         dispatch({ type: CLEAR_ALERT });
      }, 3000);
   };

   // Save to LocalStorage
   const addUserToLocalStorage = ({ user, token }) => {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
   };

   // remove from LocalStorage
   const removeUserFromLocalStorage = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
   };

   // setup User
   const setupUser = async ({ currentUser, endPoint, alertText }) => {
      dispatch({ type: SETUP_USER_BEGIN });
      try {
         const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/auth/${endPoint}`,
            currentUser
         );

         const { user, token } = data;
         dispatch({
            type: SETUP_USER_SUCCESS,
            payload: { user, token, alertText },
         });
         addUserToLocalStorage({ user, token });
      } catch (error) {
         dispatch({
            type: SETUP_USER_ERROR,
            payload: { message: error },
         });
      }
   };

   //  Open/Close Sidebar
   const toggleSidebar = () => {
      dispatch({ type: TOGGLE_SIDEBAR });
   };

   //  Open Modal
   const openModal = () => {
      dispatch({ type: OPEN_MODAL });
   };

   //  Open Modal
   const closeModal = () => {
      dispatch({ type: CLOSE_MODAL });
   };

   // User Logout
   const logoutUser = () => {
      dispatch({ type: LOGOUT_USER });
      removeUserFromLocalStorage();
   };

   // Update data user
   const updateUser = async (currentUser) => {
      dispatch({ type: UPDATE_USER_BEGIN });
      try {
         const { data } = await authFetch.patch("/auth/updateUser", currentUser);

         const { user, token } = data;

         dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
         addUserToLocalStorage({ user, token });
      } catch (error) {
         if (error.response.status !== 401) {
            dispatch({
               type: UPDATE_USER_ERROR,
               payload: { message: error.response.data.message },
            });
         }
      }
      clearAlert();
   };

   // handle Change
   const handleChange = ({ name, value }) => {
      dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
   };

   // Clear Values
   const clearValues = () => {
      dispatch({ type: CLEAR_VALUES });
   };

   // Create new Job
   const createJob = async () => {
      dispatch({ type: CREATE_JOB_BEGIN });
      try {
         const { position, company, jobType, jobLocation, status } = state;

         await authFetch.post("/jobs", {
            position,
            company,
            jobType,
            jobLocation,
            status,
         });
         dispatch({ type: CREATE_JOB_SUCCESS });
         dispatch({ type: CLEAR_VALUES });
      } catch (error) {
         if (error.response.status === 401) return;
         dispatch({
            type: CREATE_JOB_ERROR,
            payload: { message: error.response.data.message },
         });
      }
      clearAlert();
   };

   // Get Jobs with filters
   const getJobs = async () => {
      const { page, search, searchStatus, searchType, sort } = state;

      let url = `/jobs?page=${page}&status=${searchStatus}&type=${searchType}&sort=${sort}`;
      if (search) {
         url = url + `&search=${search}`;
      }
      dispatch({ type: GET_JOBS_BEGIN });

      try {
         const { data } = await authFetch(url);
         const { jobs, totalJobs, numOfPages } = data;

         dispatch({
            type: GET_JOBS_SUCCESS,
            payload: {
               jobs,
               totalJobs,
               numOfPages,
            },
         });
      } catch (error) {
         logoutUser();
      }
      clearAlert();
   };

   // set edit Job
   const setEditJob = (id) => {
      dispatch({ type: SET_EDIT_JOB, payload: { id } });
   };

   // Edit Job
   const editJob = async () => {
      dispatch({ type: EDIT_JOB_BEGIN });
      try {
         const { position, company, jobLocation, jobType, status } = state;
         await authFetch.patch(`/jobs/${state.editJobId}`, {
            company,
            position,
            jobLocation,
            jobType,
            status,
         });
         dispatch({ type: EDIT_JOB_SUCCESS });
         dispatch({ type: CLEAR_VALUES });
      } catch (error) {
         if (error.response.status === 401) return;
         dispatch({
            type: EDIT_JOB_ERROR,
            payload: { message: error.response.data.message },
         });
      }
      clearAlert();
   };

   // Delete Job
   const deleteJob = async (jobId) => {
      dispatch({ type: DELETE_JOB_BEGIN });
      try {
         await authFetch.delete(`/jobs/${jobId}`);
         getJobs();
      } catch (error) {
         logoutUser();
      }
   };

   const showStats = async () => {
      dispatch({ type: SHOW_STATS_BEGIN });
      try {
         const { data } = await authFetch.get("/jobs/stats");

         dispatch({
            type: SHOW_STATS_SUCCESS,
            payload: {
               stats: data.defaultStats,
               monthlyApplications: data.monthlyApplications,
            },
         });
      } catch (error) {
         logoutUser();
      }
      clearAlert();
   };

   // Clear search filter
   const clearFilters = () => {
      dispatch({ type: CLEAR_FILTERS });
   };

   // Move to another page
   const changePage = (page) => {
      dispatch({ type: CHANGE_PAGE, payload: { page } });
   };

   return (
      <AppContext.Provider
         value={{
            ...state,
            displayAlert,
            toggleSidebar,
            openModal,
            closeModal,
            setupUser,
            updateUser,
            handleChange,
            clearValues,
            createJob,
            getJobs,
            setEditJob,
            editJob,
            deleteJob,
            showStats,
            clearFilters,
            changePage,
            logoutUser,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

const useAppContext = () => {
   return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
