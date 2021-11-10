const authorization = "sk_e1a0cfd979c5f229e144c5a648dfbb5b";
const seb = "seb@saunier.me";
// TODO
// select the form (DOM Element)
const form = document.querySelector("#clearbitForm");
// add an event listener
form.addEventListener("submit", (e) => {
  // prevent the default behaivior (so that the page is not reloaded)
  e.preventDefault();
  //   get the user's input
  const query = form.querySelector("#clearbitEmail").value;
  console.log(query);
  //   make a fetch request to cleabit API with header Authorization Bearer token to the URL with query user's input
  fetch(`https://person.clearbit.com/v2/combined/find?email=${query}`, {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const name = data.person.name.fullName;
      const email = data.person.email;
      const bio = data.person.bio;
      const location = data.person.location;
      document.querySelector("#userName").innerText = name;
      document.querySelector("#userEmail").innerText = email;
      document.querySelector("#userBio").innerText = bio;
      document.querySelector("#userLocation").innerText = location;
    })
    .catch((err) => console.log(err));
});
