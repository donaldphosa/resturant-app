import Pages from './components/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import Logo from './components/Logo';
function App() {
console.log(process.env.REACT_APP_API_KEY);
  return (
    <BrowserRouter>
    <Logo/>
    <Search />
    <Category />
     <Pages />
    </BrowserRouter>
  );
}

export default App;
