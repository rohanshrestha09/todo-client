import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { withAuth } from 'auth';

export default function Home() {
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta content='Generated by create next app' name='description' />
            <meta
               content='width=device-width, initial-scale=1'
               name='viewport'
            />
            <link href='/favicon.ico' rel='icon' />
         </Head>

         <main className='m-10 text-5xl font-semibold text-blue-500'>
            Hello World
         </main>
      </>
   );
}

export const getServerSideProps = withAuth(async () => {
   const queryClient = new QueryClient();

   return {
      props: {
         dehydratedState: dehydrate(queryClient),
      },
   };
});
