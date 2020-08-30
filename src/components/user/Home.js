import React from 'react';
import { connect } from 'react-redux';
import Header from '../../shared/Header';
import ProductCard from './ProductCard';
import '../../styles/home.scss';

const Home = (props) => {
	const { products } = props;

	return (
		<div id="userHome">
			<Header />
			<div className="userHomeBody">
				{
					products.map(product => {
						return <ProductCard key={product.id} product={product} dispatch={props.dispatch}/>
					})
				}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
		products: state.productsReducer
	}
}

export default connect(mapStateToProps)(Home);