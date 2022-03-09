import { Layout, Row, Col, } from 'antd';
const { Content } = Layout;

const NewProduct = ({ setScreen }) => (
  <>
    <Content className='content'>
      <button className='button' onClick={() => setScreen(0)}>Volver</button>
      <p>Ingresá tu producto</p>
      <Row className="products-container">
        <form >
          <div className='form'>
            <div className="form-field">
              <label className="label" htmlFor="name">Nombre</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="price">Precio</label>
              <input type="number" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="imageUrl">Imagen</label>
              <input type="text" />
            </div>
            <input style={{ color: 'black' }} type="submit" value="Enviar" />
          </div>
        </form>
      </Row>
    </Content>
  </>
);

export default NewProduct;
