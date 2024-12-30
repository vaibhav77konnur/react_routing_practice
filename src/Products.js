import PageNav from "./PageNav";
import prod1 from "../src/assets/prod1.webp";
import prod2 from "../src/assets/prod2.webp";
import prod3 from "../src/assets/prod3.webp";

import "./styles.css";
export default function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <div className="product-list">
        <div className="product-item">
          <img src={prod1} alt="product 1" />
        </div>
        <div className="product-item">
          <img src={prod2} alt="product 1" />
        </div>
        <div className="product-item">
          <img src={prod3} alt="product 1" />
        </div>
      </div>
      <PageNav />
    </>
  );
}
