import { BACKEND_URL } from "../constant";
import axios from "axios";
export default function PaymentPopup({packag,setPackag,user}){
  const token = localStorage.getItem('token');
      if (!user || !token) {
        // window.location.href = "/login";
        return <></>;
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
       
      <div className="relative w-full max-w-[600px] p-4">
        <section className="bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
            <h3 id="modal-title" className="text-xl font-semibold text-gray-900 dark:text-white">
              {`${packag.name} - ${packag.price}`}
            </h3>
            
          </header>

          <div className="p-6 flex justify-center items-center flex-col">
            <button
              className="px-4 py-2 bg-blue-500 mb-2 w-full text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={GetIntaSendUrl}
            >
              Pay with IntaSend
            </button>
            <button
              className="px-4 py-2 bg-green-500 mb-2 w-full text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Pay with Crypto
            </button>
          </div>
        </section>
      </div>
    );
}