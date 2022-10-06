# Welcome to Full-stack Blog App! 🍃

This is a complete full-stack project focused on the `backend` that includes a complete `frontend` and `backend` built by myself to put into practice my knowledge of `backend` and `frontend` together. 

# Table of contents

- [Welcome to Full-stack Blog App! 🍃](#welcome-to-full-stack-blog-app-)
- [Table of contents](#table-of-contents)
  - [API](#api)
  - [Database](#database)
  - [Security](#security)
  - [JSON Schema Validator](#json-schema-validator)
  - [Links](#links)
  - [The challenge](#the-challenge)
    - [Users should be able to:](#users-should-be-able-to)
    - [Technologies used](#technologies-used)
      - [Frontend Technologies](#frontend-technologies)
      - [Backend Technologies](#backend-technologies)
    - [Preview](#preview)

## API

The `API` of the project is built with `node` and `Expres.js` as a framework. This `API` has some `public` and `private` endpoints. One of the `public` endpoints is [https://mouhametnd-blog-app.up.railway.app/api/blogs](https://mouhametnd-blog-app.up.railway.app/api/blogs) and one of the `private` endpoints is [https://mouhametnd-blog-app.up.railway.app/api/user/blogs](https://mouhametnd-blog-app.up.railway.app/api/user/blogs).

## Database

I used `MongoDB` as a `database` to store the user's account and blogs, as well I used the database to store the result of the `CRUD (create, read, update and delete)` operations.

## Security

This blog app includes `authentication` and `authorization` using `JWT (JSON Web Token)` to authenticate and authorize the user for some endpoints and functionalities. As well I used a library called `bcrypt` to hash the password of the users before storing them in the `database`.

## JSON Schema Validator

I used a library called `jose` that used `AJV (JSON Schema validator)` under the hood to validate the JSON object that we receive from the clients, before manipulating with them.

## Links

- Live Project [Blog app](https://mouhametnd-blog-app.netlify.app/)
- Portfolio [Mouhamet Ndiaye](https://mouhametnd.com/)
- Email ahmetndiaye404@gmail.com
- Linkedin [Linkedin](https://www.linkedin.com/in/mouhametndiaye/)
## The challenge

### Users should be able to:

- Sign up to create an account
- Log in to use a created account
- generate a `guest` account
- Update the user credits such as `name` and `username`
- Create, read, delete and update the user's blogs
- Ability to see and interact with other users blogs, such as upvote and downvote any blog
- See a `responsive design` on any device screen
- Sort blogs by `newest`, `oldest`, `most voted`, `less voted` and `randomly`
- Set the blogs per page for example `5`, `10`, `15` etc.

### Technologies used

#### Frontend Technologies 
- React
- Typescript
- Redux - Toolkit
- Axios
- Tailwind CSS
- CSS and SCSS
- Mobile-first workflow

#### Backend Technologies
- Node 
- Express.JS
- MongoDB (Database)
- JWT (JSON web token)
- AJV (JSON schema validator)
- bcrypt

### Preview

![Preview](./preview.gif)


