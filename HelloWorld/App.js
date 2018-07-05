import React from 'react';
import {StyleSheet, View} from 'react-native';
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
		backgroundColor: '#f00',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollContainer: {
		flex: 1,
		backgroundColor: '#0f0',
		//alignItems: 'center',
		//justifyContent: 'center',
	},
	scroll:{
		flex: 1,
		backgroundColor: '#0ff',
		//alignItems: 'center',
		//justifyContent: 'center',
	}, 
	scrollView:{
		flex: 1,
		backgroundColor: '#00f',
		//alignItems: 'center',
		//justifyContent: 'center',
	}, 
	buttonContainer: {
		margin: 20
	}
});
