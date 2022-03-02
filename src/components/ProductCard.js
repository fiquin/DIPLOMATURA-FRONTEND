const ProductCard = ({product}) => {
  return(
    <>
      <div className="product-card">
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    </>
  );
}

export default ProductCard;
