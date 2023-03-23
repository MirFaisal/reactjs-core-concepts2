import { useEffect, useState } from "react";
import "./App.css";

// produce array
const products = [
  { name: "ASUS Laptop", price: 35000 * 2 },
  { name: "Iphone", price: 135000 },
  { name: "Apple Watch", price: 50000 },
  { name: "Pixel 4a", price: 35000 },
  { name: "AirPods Max", price: 60000 },
  { name: "XO Power Bank", price: 7000 },
];
// main render function
function App() {
  return (
    <div className="App">
      <div className="main-product">
        {products.map((product, id) => (
          <Produce key={id} name={product.name} price={product.price} />
        ))}
      </div>

      {/* Extenal users component */}
      <div className="externel-user-container">{<ExternalUser />}</div>
    </div>
  );
}

// A new Component
const Produce = (props) => {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <h3> {props.price} Tk</h3>
      <ProductQuentity />
    </div>
  );
};

// product quentity
const ProductQuentity = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => (count > 0 ? setCount(count - 1) : count);
  return (
    <div>
      <h2>Quantity: {count}</h2>
      <div className="buttons-container">
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  );
};

// Extarnal user Load

const ExternalUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Extarnel User</h1>
      {users.map((user) => {
        return (
          <ExternalUserComponent
            key={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

// extarnel user component

const ExternalUserComponent = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default App;
