import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TranscationList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { AppContextProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTransaction />
      </div>
    </AppContextProvider>
  );
}

export default App;
