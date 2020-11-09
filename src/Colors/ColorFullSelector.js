import React, { Component } from 'react';
import Cards from '../Card/Card';
import BackToTop from 'react-easy-back-to-top';
import Painting from '../Image/2.png';
import Loader from '../Loader/Loader';
import './Color.css';
class ColorPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSelection: '',
			color: [],
		};
	}
	render() {
		if (this.props.color.length === 0 && this.props.errorMessage.length === 0) {
			return <Loader />;
		}
		else if (this.props.color.length === 0 && this.props.searchSelected === true ) {
			return (
				<div className="ErrorSearch">
					<img src={Painting} alt="Color Swatches" />
				</div>
			);
		} else {
			return (
				<div className="colorBase">
					{this.props.color.map((item, index) => <Cards {...item} key={index} />)}
					<BackToTop
						backgroundColor="grey"
						position={{ right: '5%', bottom: '10%' }}
						hover={{ backgroundColor: 'red', color: 'white' }}
						transition="all 0.5s"
						showOnDistance={0}
						borderRadius={16}
						icon="fas fa-arrow-up"
						text=" Top"
						opacity=".8"
						color="white"
						fontSize="14px"
					/>
				</div>
			);
		}
	}
}

export default ColorPage;
