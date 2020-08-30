import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthRoute from './components/auth/AuthRoute';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/auth/Login';
import HomePage from './components/user/Home';
import CartPage from './components/user/Cart';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/log--in' component={LoginPage} />

				<AuthRoute exact={true} path='/login'>
					<LoginPage />
				</AuthRoute>

				<AuthRoute exact={true} path='/home'>
					<HomePage />
				</AuthRoute>

				<AuthRoute exact={true} path='/user/cart'>
					<CartPage />
				</AuthRoute>
			</Switch>
		</BrowserRouter>
	);
}

export default App;