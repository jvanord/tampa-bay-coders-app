import React from 'react';
import {StyleSheet} from 'react-native';
import HomeComponent from './components/Home';

export default class App extends React.Component {
	render() {
		return (
			<HomeComponent styles={styles} />
		);
	}
}

const styles = StyleSheet.create({ 
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
