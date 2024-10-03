import { BACKEND_URL } from "../constant";
import axios from "axios";
 export  async function fetchLogin(email,password,setError){
   const url = `${BACKEND_URL}/api/auth/login`
  if (!email || !password) {
    setError('Please fill out both fields.');
    return;
  }
  setError('');

  try {
    const response = await axios.post(url, {
      email, 
      password,
   });

   const token = response.data.token // Store the token from the response
   console.log(response.data); 
   const data = response.data;
    localStorage.setItem('token',token);
    window.location.href = '/dashboard'; 
  } catch (error) {
    setError('Invalid email or password.');
    console.error('Sign-in error:', error);
  }

       
    }

    export async function fetchSignup(formData,setError,setSuccess) {
      
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

     
    try {      
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
    
       localStorage.setItem('token',data.token);
      setSuccess('User registration successful!');
      window.location.href='/welcome'; 
    } catch (error) {
      setError(error.message);
      alert(error.message || "Some error occured");
    } 

        
}