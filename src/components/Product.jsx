import { PropTypes } from "prop-types";

const Product = ({ children, onDeleteProduct, id }) => {
  return (
    <>
      <div className="my-4">
        <div className="card text-white bg-info mb-3">{children}</div>
        <button
          className="btn btn-light"
          onClick={() => {
            onDeleteProduct(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

// validation prop types

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  label: "My Product",
  price: 3000,
};
export default Product;
