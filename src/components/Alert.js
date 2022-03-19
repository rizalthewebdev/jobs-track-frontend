import { useAppContext } from "../context/appContext";

const Alert = ({auth}) => {
   const { alertText, alertType } = useAppContext();
   return <div className={` alert ${alertType} ${auth && 'fixed inset-x-0 z-50 top-0'}`}>{alertText}</div>;
};

export default Alert;
