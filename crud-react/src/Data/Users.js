const UserData = () => {
   return fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((out) => console.log("Checkout this JSON! ", out))
      .catch((err) => console.log(err));
};

export default UserData;
