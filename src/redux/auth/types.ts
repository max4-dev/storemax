import { Status } from '../goods/types';

export interface AuthSliceState {
  data: any,
  status: Status,
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  email: string;
  fullName: string;
  password: string;
}

export {Status}