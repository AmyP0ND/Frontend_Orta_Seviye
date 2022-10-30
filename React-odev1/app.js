
import axios from "axios";

const getUsers = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data:user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );
    resolve(user);
  });
};

const getPosts = (number) => {
  return new Promise(async (resolve, reject) => {
    const { data:post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + number
    );
    resolve(post);
  });
};

async function getData(number) {
    try {
        const users = await getUsers(number);
        const posts = await getPosts(number);

        users.posts=posts;
        return users;
        

      } catch (e) {
        console.log(e);
      }
}

export default getData;
