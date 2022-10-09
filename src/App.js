import { Routes, Route } from 'react-router-dom';
import Home from '../src/components/routes/home/home.component';
import Navigation from '../src/components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.component';
import { TestContext } from './context/user.context';

const App = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: 'hats',
  //     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'jackets',
  //     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'sneakers',
  //     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'womens',
  //     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  //   },
  //   {
  //     id: 5,
  //     title: 'mens',
  //     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  //   },
  // ];

  const Shop = () => {
    return <h1>This is a shop component</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>

      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
};

export default App;
