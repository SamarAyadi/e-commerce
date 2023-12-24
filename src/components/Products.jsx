import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";

function Products() {
  

  const [title, setTitle]= useState("")
  const [price, setPrice]= useState("")
  let showList = true;
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
      <form>
        <div className="form-group my-2">
          <label htmlFor="" className="form-label">Title</label>
          <input onChange={} type="text" className="form-control" />
        </div>

        <div className="form-group my-2">
          <label htmlFor="" className="form-label">Price</label>
          <input onChange={} type="number" className="form-control" />
        </div>

        <button className="btn btn-success my-2 mb-2">Save</button>
      </form>

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
