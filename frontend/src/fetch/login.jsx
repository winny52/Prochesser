import { BACKEND_URL } from "../constant";
import axios from "axios";
 export  async function fetchLogin(email,password){
       const url = `${BACKEND_URL}/api/auth/login`
        const response = await axios.post(url, {
           email, 
           password,
        });
  
        const token = response.data.token // Store the token from the response
        console.log(response.data); 
    return response.data;
    }

    export async function fetchSignup(formData) {
     const url = `${BACKEND_URL}/api/auth/signup`

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstname: formData.firstName, 
              lastname: formData.lastName, 
              email: formData.email,
              password: formData.password,
            }),
          });
    
          
          const data = await response.json();
          console.log(data);
    
          if (!response.ok) {
            throw new Error(data.message || 'Failed to register');
        }

        return data;
}