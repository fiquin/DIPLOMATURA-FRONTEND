const ProductCard = ({product}) => {
  return(
    <>
      <img className="product-image" src={product.imageUrl} alt="product" />
      <div className="product-card">
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
      </div>
    </>
  );
};

export default ProductCard;
