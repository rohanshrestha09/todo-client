import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
   Hydrate,
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import AppLayout from 'layout';
import AuthContext from 'auth';
import store from 'store';

export default function App({ Component, pageProps }: AppProps) {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
         },
      },
   });

   return (
      <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <Provider store={store}>
               <AuthContext>
                  <AppLayout>
                     <Component {...pageProps} />
                  </AppLayout>
               </AuthContext>
            </Provider>
         </Hydrate>
      </QueryClientProvider>
   );
}
