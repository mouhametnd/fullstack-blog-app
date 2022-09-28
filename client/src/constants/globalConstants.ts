import { ISelectOption } from '../components/customSelect/customSelectTypes';

export const inputProps = {
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
};

export const baseFormProps = {
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
};

export const API_BASE_URL = 'http://localhost:3000/api';

export const sortByOptions: ISelectOption[] = [
  { title: 'Random', value: 'random' },
  { title: 'Newest', value: 'newest' },
  { title: 'Latest', value: 'latest' },
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
