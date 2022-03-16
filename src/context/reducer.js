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
   CLOSE_MODAL
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
   // Toggle Sidebar button function
   if (action.type === TOGGLE_SIDEBAR) {
      return {
         ...state,
         showSidebar: !state.showSidebar,
      };
   }

   if (action.type === OPEN_MODAL) {
      return {
         ...state,
         showModal: true,
      };
   }

   if (action.type === CLOSE_MODAL) {
      return {
         ...state,
         showModal: false,
      };
   }

   // Display Alert
   if (action.type === DISPLAY_ALERT) {
      return {
         ...state,
         showAlert: true,
         alertType: "danger",
         alertText: "Please provide all values !",
      };
   }

   // Clear Alert
   if (action.type === CLEAR_ALERT) {
      return {
         ...state,
         showAlert: false,
         alertText: "",
         alertType: "",
      };
   }

   // Begin Setup user
   if (action.type === SETUP_USER_BEGIN) {
      return {
         ...state,
         isLoading: true,
      };
   }

   // Setup user success
   if (action.type === SETUP_USER_SUCCESS) {
      return {
         ...state,
         isLoading: true,
         token: action.payload.token,
         user: action.payload.user,
         userLocation: action.payload.location,
         jobLocation: action.payload.location,
         showAlert: true,
         alertType: "success",
         alertText: action.payload.alertText,
      };
   }

   // Setup user Error
   if (action.type === SETUP_USER_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertText: action.payload.message,
         alertType: "danger",
      };
   }

   // Logout User
   if (action.type === LOGOUT_USER) {
      return {
         ...initialState,
         user: null,
         token: null,
         jobLocation: "",
         userLocation: "",
      };
   }

   // Update User begin
   if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true };
   }

   // Update user success
   if (action.type === UPDATE_USER_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         token: action.payload.token,
         user: action.payload.user,
         userLocation: action.payload.location,
         jobLocation: action.payload.location,
         showAlert: true,
         alertType: "success",
         alertText: "User Profile Updated !",
      };
   }

   // Failed Update user
   if (action.type === UPDATE_USER_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: "danger",
         alertText: action.payload.message,
      };
   }

   // Handle change
   if (action.type === HANDLE_CHANGE) {
      return {
         ...state,
         page: 1,
         [action.payload.name]: action.payload.value,
      };
   }

   // Clear Value
   if (action.type === CLEAR_VALUES) {
      const initialState = {
         isEditing: false,
         editJobId: "",
         position: "",
         company: "",
         jobLocation: state.userLocation,
         jobType: "full-time",
         status: "pending",
      };

      return {
         ...state,
         ...initialState,
      };
   }

   // Create Job begin
   if (action.type === CREATE_JOB_BEGIN) {
      return { ...state, isLoading: true };
   }

   // Create job success
   if (action.type === CREATE_JOB_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: "success",
         alertText: "New Job Created!",
      };
   }

   // Create Job error
   if (action.type === CREATE_JOB_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: "danger",
         alertText: action.payload.message,
      };
   }

   // Begin Get Job
   if (action.type === GET_JOBS_BEGIN) {
      return { ...state, isLoading: true, showAlert: false };
   }

   // Get Jobs success
   if (action.type === GET_JOBS_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         jobs: action.payload.jobs,
         totalJobs: action.payload.totalJobs,
         numOfPages: action.payload.numOfPages,
      };
   }

   // Set edit Job
   if (action.type === SET_EDIT_JOB) {
      const job = state.jobs.find((job) => job._id === action.payload.id);
      const { _id, position, company, jobLocation, jobType, status } = job;

      return {
         ...state,
         isEditing: true,
         editJobId: _id,
         position,
         company,
         jobLocation,
         jobType,
         status,
      };
   }

   // Begin Edit Job
   if (action.type === EDIT_JOB_BEGIN) {
      return {
         ...state,
         isLoading: true,
      };
   }

   // Edit Job Success
   if (action.type === EDIT_JOB_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: "success",
         alertText: "Job Updated Successfully",
      };
   }

   // Edit Job Error
   if (action.type === EDIT_JOB_ERROR) {
      return {
         ...state,
         isLoading: false,
         showAlert: true,
         alertType: "danger",
         alertText: action.payload.message,
      };
   }

   // Begin Delete Job
   if (action.type === DELETE_JOB_BEGIN) {
      return {
         ...state,
         isLoading: true,
      };
   }

   // Show Stats Begin
   if (action.type === SHOW_STATS_BEGIN) {
      return {
         ...state,
         isLoading: true,
         showAlert: false,
      };
   }

   // Show Stats Success
   if (action.type === SHOW_STATS_SUCCESS) {
      return {
         ...state,
         isLoading: false,
         stats: action.payload.stats,
         monthlyApplications: action.payload.monthlyApplications,
      };
   }

   // Clear Filters
   if (action.type === CLEAR_FILTERS) {
      return {
         ...state,
         search: "",
         searchStatus: "",
         searchType: "all",
         sort: "latest",
      };
   }

   // Change Page
   if (action.type === CHANGE_PAGE) {
      return { ...state, page: action.payload.page };
   }

   throw new Error(`No such action : ${action.type}`);
};

export default reducer;
