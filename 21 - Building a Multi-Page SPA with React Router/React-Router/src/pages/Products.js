import { Link } from "react-router-dom";

const DUMMY_PRODUTCS = [
  { id: "p1", title: "Iphone", description: "Dummy Iphone" },
  { id: "p2", title: "Laptop", description: "Dummy Laptop" },
  { id: "p3", title: "Glasses", description: "Dummy Glasses" },
];

function Products() {
  return (
    <>
      <h1>The Product Page</h1>
      <ul>
        {DUMMY_PRODUTCS.map((product) => (
          <li key={product.id}>
            <Link to={product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
