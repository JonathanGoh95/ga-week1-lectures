async function getData() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url); // Store data received from server in a response variable
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`); // Throw error with status message when response data is corrupted
    }

    const json = await response.json(); // Converts the data to JSON from the response object inside a json variable
    // console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
