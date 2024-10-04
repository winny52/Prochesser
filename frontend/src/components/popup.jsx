import { BACKEND_URL } from "../constant";
import axios from "axios";
export default function PaymentPopup({packag,setPackag,user}){
  const token = localStorage.getItem('token');
      if (!user || !token) {
        window.location.href = "/login";
        return;
      }
 async function GetIntaSendUrl() {
    const type = packag.type;
      
      console.log(user);
      const url = `${BACKEND_URL}/api/payment/get-url`;
      try {
        const response = await axios.post(
          url,
          {
            name: type,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const data = response.data;
        if(!data.paymentDetails){
          console.log(data);
          setPackag(null)
          alert(data.message)
          return;
        }else{
          window.location.href = data.paymentDetails;
        }
      } catch (error) {
        console.error('Error fetching payment URL:', error);
      }
    }


    return (
        <div
      id="popup-modal"
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-[600px] p-4">
        <section className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
            <h3 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
              {`${packag.name} - ${packag.price}`}
            </h3>
            <button
              type="button"
              onClick={() => setPackag(null)}
              className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 focus:outline-none dark:hover:bg-gray-700 dark:hover:text-white"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </header>

          <div className="p-6 flex justify-around">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={GetIntaSendUrl}
            >
              Pay with IntaSend
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Pay with Crypto
            </button>
          </div>
        </section>
      </div>
    </div>
    );
}