import { Routes, Route, Navigate } from 'react-router-dom';
import CustomerIndex from './pages/CustomerIndex';
import CustomerView from './pages/CustomerView';
import ContestsList from './pages/ContestsList';
import Navigation from './components/Nav';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate replace to="/customers" />} />
        <Route path='/customers' element={<CustomerIndex />} />
        <Route path='/contests' element={<ContestsList />} />
        <Route path='/customers/customer/:id' element={<CustomerView />}/>
      </Routes>
    </div>
  );
}

export default App;
