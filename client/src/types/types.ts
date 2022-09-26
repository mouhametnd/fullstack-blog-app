export interface IUser {
  blogs: IBlog[];
  name: string;
  username: string;
  latestUpdate: number;
}



export interface IBlog {
  _id: string;
  title: string;
  description: string;
  votes: {
    total: number;
    likedUsers: string[];
  };
  userCreator: {
    username: string;
    name: string;
  };
  lastUpdate: number;
}
