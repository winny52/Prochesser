// src/state/userState.ts
import { atom, selector } from 'recoil';
import axios from 'axios';
import { BACKEND_URL } from '../constant';

interface User {
  id: number;
  email: string;
  firstname: string;
lastname:string;
subscriptions:any
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const fetchUserState = selector<User | null>({
  key: 'fetchUserState',
  get: async ({ get }) => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = await axios.get<User>(`${BACKEND_URL}/api/auth/refresh`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        
        return response.data;
      } catch (error) {
        console.error('Error fetching user:', error);
        localStorage.removeItem('token');
        return null;
      }
    }
    return null;
  },
});
