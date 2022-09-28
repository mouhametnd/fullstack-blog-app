import { AxiosRequestConfig } from 'axios';
import { TBlogsNames } from '../../store/slices/blogs/blogsSliceTypes';

export interface IUseBlogsProps {
  reqEndpoint: string;
  headers: { [x: string]: string };
  blogsName: TBlogsNames;
}
