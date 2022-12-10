import { toast } from "react-toastify";

const toastConfig = {
  position: toast.POSITION.TOP_CENTER,
  autoClose: 4000,
  pauseOnFocusLoss: false
};

export const toastSuccess = (message: string) => {
  return toast.success(message, toastConfig);
};

export const toastError = (message: string) => {
  return toast.error(message, toastConfig);
};
