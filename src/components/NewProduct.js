import { Layout, Row, } from 'antd';
import React, { useState } from 'react';
const { Content } = Layout;

const NewProduct = ({ setScreen }) => {
  const [ values, setValues ] = useState({
    productName: '',
    description: '',
    price: 0,
    imageUrl: ''
  });
  
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setValues(prev => ({...prev, [name]: value}))
  }

  console.log("🚀 :::::::::::: values", values);

  return(
    <>
      <Content className='content'>
        <button className='button' onClick={() => setScreen(0)}>Volver</button>
        <p>Ingresá tu producto</p>
        <Row className="products-container">
          <form >
            <div className='form'>
              <div className="form-field">
                <label className="label" htmlFor="productName">Nombre</label>
                <input onChange={handleChange} value={values.productName} name="productName" style={{ color: 'black'}} type="text" />
              </div>
              <div className="form-field">
                <label className="label" htmlFor="description">Descripción</label>
                <input onChange={handleChange} value={values.description} name="description" style={{ color: 'black'}} type="text" />
              </div>
              <div className="form-field">
                <label className="label" htmlFor="price">Precio</label>
                <input onChange={handleChange} value={values.price} name="price" style={{ color: 'black'}} type="number" />
              </div>
              <div className="form-field">
                <label className="label" htmlFor="imageUrl">Imagen</label>
                <input onChange={handleChange} value={values.imageUrl} name="imageUrl" style={{ color: 'black'}} type="text" />
              </div>
              <input style={{ color: 'black' }} type="submit" value="Enviar" />
            </div>
          </form>
        </Row>
      </Content>
    </>
  );
}

export default NewProduct;
