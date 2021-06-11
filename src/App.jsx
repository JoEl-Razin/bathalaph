import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// ADMIN PAGES
import Admin from './pages/admin/Admin'
import Dashboard from './pages/admin/Dashboard'

// HOME PAGES
import Cart from './pages/home/Cart'
import Home from './pages/home/Home'
import FAQs from './pages/home/FAQs'
import ProductPage from './pages/home/ProductPage'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/faqs' component={FAQs}/>
        <Route path='/product' component={ProductPage}/>

        <Route path='/admin' exact component={Admin}/>
        <Route path='/admin/dashboard' component={Dashboard}/>

      </Switch>
    </Router>
  );
}

export default App;
