import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../Features/AlertSlice';

function AlertModal() {
  const { alert = {}, showAlert } = useSelector((state) => state.alert || {});
  const dispatch = useDispatch();

  const handleClose = async () => {
    await dispatch(closeAlert());
  };

  // Icons and colors for different alert types
  const alertStyles = {
    success: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      color: 'bg-green-100',
      buttonColor: 'bg-green-600',
    },
    error: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
      color: 'bg-red-100',
      buttonColor: 'bg-red-600',
    },
    warning: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 10-18 0 9 9 0 0018 0z"
          />
        </svg>
      ),
      color: 'bg-yellow-100',
      buttonColor: 'bg-yellow-600',
    },
    info: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 10-18 0 9 9 0 0018 0z"
          />
        </svg>
      ),
      color: 'bg-blue-100',
      buttonColor: 'bg-blue-600',
    },
  };

  const currentAlert = useMemo(() => {
    if (!alert || !alert.type) {
      return alertStyles.info; 
    }
    return alertStyles[alert.type] || alertStyles.info; 
  }, [alert]);

  return (
    <>
      {showAlert && (
        <div>
          <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
            <div
              aria-hidden="true"
              className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
            ></div>

            <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
              <div
                className={`w-full py-2 cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm ${currentAlert.color}`}
              >
                <button
                  tabIndex="-1"
                  type="button"
                  className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                  onClick={handleClose}
                >
                  <svg
                    title="Close"
                    tabIndex="-1"
                    className="h-4 w-4 cursor-pointer text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </button>

                <div className="space-y-2 p-2">
                  <div className="p-4 space-y-2 text-center dark:text-white">
                    <h2 className="text-xl font-bold tracking-tight" id="page-action.heading">
                      {currentAlert.icon}
                      <span className="ml-2">{alert.type}</span>
                    </h2>

                    <p className="text-gray-500">{alert.message}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div aria-hidden="true" className="border-t dark:border-gray-700 px-2"></div>

                  <div className="px-6 py-2">
                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                      <button
                        type="submit"
                        onClick={handleClose}
                        className={`inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent ${currentAlert.buttonColor} hover:bg-opacity-80`}
                      >
                        <span className="flex items-center gap-1">
                          <span>Ok</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlertModal;
