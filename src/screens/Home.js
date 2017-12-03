import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Greeter from 'components/Greeter';
import Header from 'components/Header';

class Home extends Component {
	static propTypes = {
		navigation: PropTypes.object,
	};

	static defaultProps = {
		navigation: null,
	};

	onSettingPress = () => {
		this.props.navigation.navigate('Settings', {
			customData: 'this string was pass from Home Page',
		});
	};

	render() {
		return (
			<Container center>
				<Header onSettingPress={this.onSettingPress} />
				<Greeter greetText="Wellcome to React Native Starter" />
			</Container>
		);
	}
}

export default Home;
