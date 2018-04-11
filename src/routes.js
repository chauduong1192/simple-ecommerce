import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import CartCheckout from './components/CartCheckout';

const routes = [{
    key: 'home',
    path: '/',
    exact: true,
    component: ProductsList,
}, {
    key: 'products-detail',
    path: '/products-detail/:productId',
    component: ProductDetails,
}, {
    key: 'checkout',
    path: '/checkout',
    component: CartCheckout,
}];

export default routes;
