export interface IUseFormProps {
  reqEndpoint: string;
  httpMethod: 'post' | 'put' | 'patch';
  headers?: {};
  successCb?: () => unknown;
  errorCb?: () => unknown;
  formValues: {
    [x: string]: {
      name: string;
      value: string;
      regex: RegExp;
    };
  };
}
export type TUseFormError = { msg: string } | { msg: false };
