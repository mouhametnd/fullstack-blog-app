export const inputProps = {
  name: {
    type: 'text',
    name: 'name',
    id: 'name',
    placeholder: 'Your name',
    pattern: '[a-zA-Z]{3,}'
  },
  username: {
    type: 'text',
    id: 'username',
    name: 'username',
    placeholder: 'Your username',
    pattern: '^[A-Za-z][A-Za-z0-9_]{7,}$',
  },
  password: {
    type: 'password',
    name: 'password',
    id: 'password',
    placeholder: 'Your password',
    pattern: '^[A-Za-z]([A-Za-z0-9_]){7,}$',
  },
};



export const BASE_API_ENDP = 'http://localhost:3000/api'