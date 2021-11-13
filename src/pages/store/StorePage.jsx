
import ProductList from '../../components/container/ProductList/ProductList';
import './StorePage.scss';


export default function Store() {
  


  return (
    <div className="container">
      <h2 className="title-header">Bienvenido a mi tienda</h2>
      <ProductList ></ProductList>
    </div>
  );
}