import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAppContext } from "../../context/appContext";
import Authentication from "./Authentication";
import Alert from "../Alert";

export default function Modal() {
   const {showModal, closeModal, showAlert} = useAppContext()

   return (
      <>
         <Transition appear show={showModal} as={Fragment}>
            <Dialog
               as="div"
               className="fixed inset-0 z-10 overflow-y-auto"
               onClose={closeModal}
            >
                        {showAlert && <Alert auth />}
               <div className="min-h-screen bg-black/75 px-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0"
                     enterTo="opacity-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                     className="inline-block h-screen align-middle"
                     aria-hidden="true"
                  >
                     &#8203;
                  </span>
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <div className="inline-block w-full max-w-sm md:max-w-md px-6 py-12 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div className="w-full h-16 bg-[#6517BE] fixed top-0 left-0 right-0" />
                        <img
                           src="wave.svg"
                           alt="wave"
                           className="fixed top-14 left-0 right-0"
                        />
                        <Authentication/>
                     </div>
                  </Transition.Child>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
