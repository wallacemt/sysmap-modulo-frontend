fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.createElement("ul");
    data.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
});

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    })
}).then((response) => response.json())


// const getUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
// };

// getUsers();

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
})
