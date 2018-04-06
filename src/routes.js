import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
// import Saved from './components/Saved';
// import Error404 from './components/Errors/Error404';

const routes = [{
    key: 'home',
    path: '/',
    exact: true,
    render: Home,
}, {
    key: 'products-list',
    path: '/products-list',
    component: ProductsList,
}, {
    key: 'products-detail',
    path: '/products-detail',
    component: ProductDetails,
}];

export default routes;