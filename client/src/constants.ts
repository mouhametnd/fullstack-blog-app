import {  ISelectOption, IUseFormProps, TPageLinks } from './types';

export const baseInputProps = {
  name: {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Your name',
    pattern: '[a-zA-Z]{3,}.*',
    autoComplete: 'off',
  },
  username: {
    type: 'text',
    id: 'username',
    name: 'username',
    placeholder: 'Your username',
    pattern: '^[A-Za-z][A-Za-z0-9_]{7,}$',
    autoComplete: 'off',
  },
  password: {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Your password',
    pattern: '^[A-Za-z]([A-Za-z0-9_]){7,}$',
    autoComplete: 'off',
  },
  title: {
    autoComplete: 'off',
    id: 'title',
    name: 'title',
    pattern: '.{3,}.*',
    placeholder: 'Blog title',
    type: 'text',
  },

  description: {
    autoComplete: 'off',
    id: 'description',
    name: 'description',
    pattern: '.{3,}.*',
    minLength: 3,
    placeholder: 'Blog description',
    type: 'text',
  },
};

export const baseFormValues = {
  name: {
    name: 'name',
    regex: /[a-zA-Z]{3,}.*/,
    value: '',
  },

  username: {
    name: 'username',
    regex: /^[A-Za-z][A-Za-z0-9_]{7,}$/,
    value: '',
  },
  password: {
    name: 'password',
    regex: /^[A-Za-z]([A-Za-z0-9_]){7,}$/,
    value: '',
  },
  description: {
    name: 'description',
    regex: /^.{3,}.*$/,
    value: '',
  },
  title: {
    name: 'title',
    regex: /^.{3,}.*$/,
    value: '',
  },
};

export const API_BASE_URL = 'https://mouhametnd-blog-app.up.railway.app/api';

export const sortByOptions: ISelectOption[] = [
  { title: 'Random', value: 'random' },
  { title: 'Newest', value: 'newest' },
  { title: 'Oldest', value: 'oldest' },
  { title: 'Most voted', value: 'mostVoted' },
  { title: 'Less voted', value: 'lessVoted' },
  { title: 'Title', value: 'title' },
];

export const perPageOptions: ISelectOption[] = [
  { title: '5', value: '5' },
  { title: '10', value: '10' },
  { title: '15', value: '15' },
  { title: '20', value: '20' },
];

export const logInUseFormProps: IUseFormProps = {
  reqEndpoint: `${API_BASE_URL}/log-in`,
  httpMethod: 'post',
  formValues: { password: { ...baseFormValues.password }, username: { ...baseFormValues.username } },
  headers: {},
};

const { name, password, username } = baseFormValues;
export const signInUseFormProps: IUseFormProps = {
  reqEndpoint: `${API_BASE_URL}/sign-in`,
  httpMethod: 'post',
  formValues: { name, username, password },
  headers: {},
};

export const pageLinks: TPageLinks = [
  { title: 'All Blogs', link: 'all-blogs' },
  { title: 'My Blogs', link: 'my-blogs' },
  { title: 'Dashboard', link: 'dashboard' },
];
