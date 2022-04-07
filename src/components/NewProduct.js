import { Layout, Row, } from 'antd';
import React, { useState } from 'react';
const { Content } = Layout;

const NewProduct = ({ setScreen }) => {
  const [ values, setValues ] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  });
  const baseURL = 'http://localhost:4000/api';
  
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setValues(prev => ({...prev, [name]: value}))
  }

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${baseURL}/products`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      console.log("Result: ", fortmatResponse(result));
    } catch (err) {
      console.log("Error: ", err)
    }
  };

  return(
    <>
      <Content className='content'>
        <button className='button' onClick={() => setScreen(1)}>Volver</button>
        <p>Ingresá tu producto</p>
        <Row className="products-container">
          <form onSubmit={handleSubmit}>
            <div className='form'>
              <div className="form-field">
                <label htmlFor="name" className="label">Nombre</label>
                <input value={values.name} onChange={handleChange} name="name" style={{ color: 'black'}} type="text" />
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
