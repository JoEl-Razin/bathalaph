import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

// ADMIN PAGES
import Admin from './pages/admin/Admin'
import Dashboard from './pages/admin/Dashboard'

// HOME PAGES
import Cart from './pages/home/Cart'
import Home from './pages/home/Home'
import FAQs from './pages/home/FAQs'
import ProductPage from './pages/home/ProductPage'

// 404 not found
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/faqs' exact component={FAQs}/>
        <Route path='/product' exact component={ProductPage}/>

        <Route path='/admin' exact component={Admin}/>
        <Route path='/admin/dashboard' exact component={Dashboard}/>
        <Route path='/404' component={NotFoundPage}/>
        <Redirect to='/404'/>
      </Switch>
    </Router>
  );
}

export default App;
