import { ToastContainer, toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastr = (props: any) => {
  return <ToastContainer {...props} />
} 

function notify(text: string, type?: TypeOptions) {
  toast(text, {
    position: "top-right",
    autoClose: 4500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    type: type || 'info',
    onClick: () => {
      toast.dismiss();
    }
  });
}

export { Toastr, notify };