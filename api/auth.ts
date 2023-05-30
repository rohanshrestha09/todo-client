import axios from '.';
import type { IUser } from 'interface/models';

export const getAuth = async (): Promise<IUser> => {
   const res = await axios.get('/auth/');

   return res.data?.data;
};
