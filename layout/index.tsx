import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Affix, Layout } from 'antd';
import classNames from 'classnames';

interface Props {
   children: React.ReactNode;
}

const { Header, Content, Sider } = Layout;

const AppLayout: React.FC<Props> = ({ children }) => {
   const { events } = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const sidebarAffix = useRef<any>();

   useEffect(() => {
      events.on('routeChangeComplete', () => {
         sidebarAffix?.current?.updatePosition();
      });
   }, [events, sidebarAffix]);

   return (
      <Layout className={classNames('min-h-screen')}>
         <Header>Header</Header>

         <Layout hasSider>
            <Affix ref={sidebarAffix} offsetTop={1}>
               <Sider>Sider</Sider>
            </Affix>

            <Content>{children}</Content>
         </Layout>
      </Layout>
   );
};

export default AppLayout;
