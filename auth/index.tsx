import type { GetServerSidePropsContext } from 'next';
import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuth } from 'api/auth';
import { queryKeys } from 'utils';
import { AUTH } from 'constants/queryKeys';
import type { IContext, TGetServerSidePropsReturnType } from 'interface';

export const AuthContext = createContext<IContext>({});

interface Props {
   children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
   const { data: authUser } = useQuery({
      queryFn: getAuth,
      queryKey: queryKeys(AUTH).details(),
   });

   return (
      <AuthContext.Provider value={{ authUser }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);

export const withAuth = (
   gssp: (
      context: GetServerSidePropsContext
   ) => Promise<TGetServerSidePropsReturnType>
) => {
   return async (context: GetServerSidePropsContext) => {
      const { req } = context;

      const { token } = req.cookies;

      if (!token) {
         return {
            redirect: {
               destination: '/fallback',
            },
         };
      }

      try {
         const { props } = await gssp(context);

         return { props };
      } catch (err) {
         return { notFound: true };
      }
   };
};

export const withoutAuth = (
   gssp: (
      context: GetServerSidePropsContext
   ) => Promise<TGetServerSidePropsReturnType>
) => {
   return async (context: GetServerSidePropsContext) => {
      try {
         const { props } = await gssp(context);

         return { props };
      } catch (err) {
         return { notFound: true };
      }
   };
};

export default Auth;
