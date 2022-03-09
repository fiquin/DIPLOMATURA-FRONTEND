import { Layout } from 'antd';
import CustomHeader from './CustomHeader';
import CustomContent from './CustomContent';
import CustomFooter from './CustomFooter';

const Main = ({ userName, products }) => {
  return(
    <Layout>
      <CustomHeader userName={userName} />
      <CustomContent products={products} />
      <CustomFooter />
    </Layout>
  );
}

export default Main;
