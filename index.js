// index.js

function submitData(name, email) {
  const userData = { name, email };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Append new user ID to the DOM
      document.body.append(`New user ID: ${data.id}`);
    })
    .catch((error) => {
      // Append error message to the DOM
      document.body.append(`Error: ${error.message}`);
    });
}

// Export the function for testing
module.exports = { submitData };
