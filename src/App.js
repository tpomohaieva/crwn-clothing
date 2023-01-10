import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>Shop page</div>
  )
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} ></Route>
        <Route path='/shop' element={<Shop />} ></Route>
        <Route path='/sign-in' element={<SignIn />} ></Route>
      </Route>
    </Routes>
  );
}

export default App;
