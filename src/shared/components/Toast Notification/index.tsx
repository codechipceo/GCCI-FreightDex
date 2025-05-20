import { ToastContainer, toast } from "react-toastify";

export function ToastNotification() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
