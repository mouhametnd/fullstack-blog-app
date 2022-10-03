import { AxiosRequestHeaders } from "axios";
import { IUseFormValidationArg } from "../../types/types";

export interface IUseFormProps {
  reqEndpoint: string;
  httpMethod: 'post' | 'put' | 'patch';
  headers: AxiosRequestHeaders
  successCb?: () => unknown;
  errorCb?: () => unknown;
  formValues: IUseFormValidationArg
}
export type TUseFormError = { msg: string } | { msg: false };
