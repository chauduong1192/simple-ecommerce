import Home from './components/Home';
// import ForYou from './components/ForYou';
// import Saved from './components/Saved';
// import Error404 from './components/Errors/Error404';

const routes = [{
    key: 'home',
    path: '/',
    exact: true,
    render: Home,
}];

export default routes;