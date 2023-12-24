import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";

function Products() {
  let showList = true;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  let [products, setProducts] = useState([
    {
      id: 1,
      label: "Iphone",
      price: 3500,
    },
    {
      id: 2,
      label: "Samsung",
      price: 2500,
    },
  ]);

  const titleInput = (e) => {
    // console.log("title Changed");
    if (e.target.value === "") {
      setMessage("Title is required");
    } else if (e.target.value.trim().length < 3) {
      setMessage("Please tape more than 3 characters");
    } else {
      setMessage("");
      setTitle(e.target.value);
    }
  };
  const priceInput = (e) => {
    setPrice(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(title, price);
    let myProduct = {
      id: uuid(),
      label: title,
      price,
    };
    setProducts([...products, myProduct]);
    setTitle("");
    setPrice(0);
  };
  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);

    setProducts((prev) => {
      console.log(prev);
      return myList;
    });
  };
  return (
    <>
      <Counter />

      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eligendi
        cumque assumenda architecto labore, consectetur itaque ad ratione illo
        qui repudiandae. In quisquam numquam, deleniti dolore pariatur itaque
        deserunt officiis.
      </p>

      <div className="card bg-light">
        <form onSubmit={submitForm}>
          <div className="form-group my-2">
            <label htmlFor="" className="form-label">
              Title
            </label>
            <input
              defaultValue={title}
              onChange={titleInput}
              type="text"
              className="form-control"
            />
            {message && <div className="alert alert-danger">{message}</div>}
          </div>

          <div className="form-group my-2">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input
              defaultValue={price}
              onChange={priceInput}
              type="number"
              className="form-control"
            />
          </div>

          <button className="btn btn-success my-2 mb-2">Save</button>
        </form>

        {title}
        {price}
      </div>

      {showList && (
        <div>
          {products.map((product, index) => (
            <div key={index}>
              <Product onDeleteProduct={deleteProduct} id={product.id}>
                <div className="card-body">
                  <h4 className="card-title"> {product.label} </h4>
                  <p className="card-text">
                    <button className="btn btn-success">{product.price}</button>
                    
                  </p>
                </div>
              </Product>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;