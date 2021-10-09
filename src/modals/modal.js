import React from "react";
import { signIn } from "next-auth/client";
import { Purchase } from "./purchase"

export function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);
  const setNotify = props.setNotify

  return (
    <>
      {props.page === "create" ?
          <button
            className="w-full block px-3 py-2 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-800 text-decoration-none"
            type="button"
            onClick={() => setShowModal(true)}
          >
              {props.buttonText}
          </button>
      : !sessionStorage.getItem("id") || !sessionStorage.getItem("token") ?
          <button
            className="bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-sm w-full py-3 mb-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={signIn}
          >
            Sign In To Access
          </button>
        :
          <button
            className="test bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-sm w-full py-3 mb-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}

          >
            {props.buttonText}
          </button>
      }
      {showModal ? (
        <>
        <div
          className="justify-center lg:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="my-6 mx-auto">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              {props.page === "create" ?
              <></>:
              <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                  {props.buttonText}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
            }
              {/*body*/}
              {props.page === "create" ?
              <div className="relative p-6 flex-auto">
                {/* PLACE LOGIN FORM HERE */}
                {/* <CreateAccountForm id={props.id} setNotify={props.setNotify}/> */}
            </div>
              :
              <div className="relative pl-6 pr-6 flex-auto">
              <Purchase id={props.id} setNotify={setNotify}/>
              </div>
              }
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-indigo-500 background-transparent rounded hover:bg-indigo-100 hover:shadow-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      ) : null}
    </>
  );
}
