import React from 'react';
import {Text, View, Vibration, Alert, Linking, Button, Image } from 'react-native';
import {Card} from 'react-native-elements';

class HomeComponent extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount() {
		//this.alertAndVibrate(1000);
		console.log('App Mounted');
	}
	onAlertPressed = () => {
		this.alertAndVibrate(5000);
	}
	alertAndVibrate = (delay) => {
		setTimeout(function(){
			Vibration.vibrate([300, 300, 1000], true);
			Alert.alert(
				'Hello from Indasys',
				'This is just a simple app to test the quick creation and deployment of cross-development apps. It doesn\'t do anything. Well, it opens our website - that\'s something.',
				[
					//{
					//	text: 'Ask me later',
					//	onPress: () => console.log('Ask me later pressed')
					//},
					{
						text: 'Cancel',
						onPress: () => { Vibration.cancel(); console.log('Cancel Pressed'); },
						style: 'cancel'
					},
					{text: 'OK', onPress: () => { Vibration.cancel(); console.log('OK Pressed'); }}
				],
				{cancelable: false}
			);
		}, delay || 1000); 
	}
	render() {
		return (
			<View style={this.props.styles.container}>
				<View style={{marginBottom:20}}>
					<Image source={require('../assets/images/logo.png')} />
				</View>
				<Card title="Custom Apps by Indasys" style={[{color: '#009', justifyContent: 'center', alignItems: 'center'}]}>
					<Text>
						Indasys is a custom software and app devloper with locations in Saint Petersburg, FL, and New York, NY.
						Indasys builds line of business apps for the browser and all major mobile platforms.
					</Text>
					<Text style={{color: '#009', display: 'none' }} onPress={() => Linking.openURL('http://www.indasysllc.com/')}>
						Go To Indasys Website
					</Text>
					<View style={{margin: 20}}>
						<Button title="VIEW INDASYS WEBSITE" containerViewStyle={{margin: '10'}} onPress={() => Linking.openURL('http://www.indasysllc.com/')} />
					</View>
				</Card>
				{/*
				<View style={{margin:10,justifyContent:'center',alignItems: 'center'}}>
					<Text>Developer Instructions:</Text>
					<Text>Open up App.js to start working on your app!</Text>
					<Text>Changes you make will automatically reload.</Text>
					<Text>Shake your phone to open the developer menu.</Text>
				</View>
				*/}
				<Button title="TEST ALERT (5 second delay)" onPress={this.onAlertPressed} />
			</View>
		);
	}
}

export default HomeComponent;