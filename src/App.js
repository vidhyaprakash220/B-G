import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';
import User from './components/user';
import mysvg from "../src/img/expense.jpg";

function App() {
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
	return (
    <div className="App">
      {!isAuthenticated ? (
        <div class="col-md-12" 
       >
        <div className="m-auto">
  <img onClick={() => loginWithRedirect()} style={{ cursor:"pointer"}}
    className="d-block mx-auto img-fluid w-50"
    src={mysvg}
    alt="mysvg"
  ></img>
<h1 className='mb-3 text-center' >B-E Management</h1>
</div>
          {/* <button onClick={() => loginWithRedirect()}>Log In</button> */}
        </div>
        // <div>
        //   <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
        //    <LoginButton />
        // </div>
      ) :
        <div>
           
            <User />
            <AppProvider>
            <div className='container'>
				<h1 className='mt-3'>This Month Budget Planner</h1>
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
            {/* <LoginButton></LoginButton> */}
					</div>
				</div>
        <h3 className='mt-3'>Expenses</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<ExpenseList />
				</div>
			</div>
      <h3 className='mt-3'>Add Expense</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseForm />
				</div>
			</div>
			</div>
            </AppProvider>
            
        </div>
        }
    </div>
  )
};

export default App;