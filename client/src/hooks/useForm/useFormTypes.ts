import { AxiosRequestConfig } from 'axios';
export interface IUseFormProps {
  reqEndpoint: string;
  httpMethod: 'post' | 'put' | 'patch';
  headers?: AxiosRequestConfig<{ [x: string]: string }>;
  formValues: {
    [x: string]: {
      name: string;
      value: string;
      regex: RegExp;
    };
  };
}
