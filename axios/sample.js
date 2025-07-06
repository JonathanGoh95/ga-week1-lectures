import axios from "axios";

// No METHOD needed for axios, just declare after axios (i.e. axios.<METHOD>) [See Below]
const fetchData = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      postId: 2,
    },
  });
  console.log(res);
};

// POST method under axios does not need JSON.stringify, just takes the data within {} [See Below]
const postData = async () => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
    firstName: "Fred",
    lastName: "Flintstone",
  });
  console.log(res.data);
};

const getData = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts/99999";
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
postData();
getData();
