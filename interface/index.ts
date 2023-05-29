import type { DehydratedState } from '@tanstack/react-query';
import { IUser } from './models';

export interface IContext {
   authUser?: IUser;
}

export type TGetServerSidePropsReturnType = {
   props: { dehydratedState: DehydratedState };
};
