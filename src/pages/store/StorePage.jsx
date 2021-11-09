import ProductList from '../../components/container/ProductList/ProductList';
import './StorePage.scss';



export default function Store(props) {
  return (
    <div className="container">
      <h1 className="title">Bienvenido a mi tienda</h1>
      <ProductList></ProductList>
    </div>
  );
}