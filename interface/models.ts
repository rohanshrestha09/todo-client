export interface IUser {
   id: number;
   name: string;
   username: string;
   email: string;
   password: string;
   image: string;
   imagename: string;
   provider: 'GOOGLE' | 'EMAIL';
}
