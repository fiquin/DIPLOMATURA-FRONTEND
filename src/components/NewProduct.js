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

  const handleSubmit = () => {
    fetch('http://localhost:4000/api/products', {
      method: 'POST',
      body: JSON.stringify(values),
      mode: 'no-cors',
      headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => response.text())
      .then(data => data ? JSON.parse(data) : {})
      .catch(err => console.log("Error::::::::::::::: ", err));
  };

  console.log("🚀 :::::::::::: values", values);

  return(
    <>
      <Content className='content'>
        <button className='button' onClick={() => setScreen(0)}>Volver</button>
        <p>Ingresá tu producto</p>
        <Row className="products-container">
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className="form-field">
                <label htmlFor="productName" className="label">Nombre</label>
                <input value={values.productName} onChange={handleChange} name="productName" style={{ color: 'black'}} type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="description" className="label">Descripción</label>
                <input value={values.description} onChange={handleChange} name="description" style={{ color: 'black'}} type="text" />
              </div>
              <div className="form-field">
                <label htmlFor="price" className="label">Precio</label>
                <input value={values.price} onChange={handleChange} name="price" style={{ color: 'black'}} type="number" />
              </div>
              <div className="form-field">
                <label htmlFor="imageUrl" className="label">Imagen</label>
                <input value={values.imageUrl} onChange={handleChange} name="imageUrl" style={{ color: 'black'}} type="text" />
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
