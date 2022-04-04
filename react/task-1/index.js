import axios from "axios";

async function getData(userID) {
    let { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/1`)
    let { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)

    console.log(user, "post", post)
}

export default getData