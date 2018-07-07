import React from 'react';
import { ScrollView, View, RefreshControl, Text, Vibration, Alert, Linking, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';

class HomeComponent extends React.Component{
	constructor(props){
		super(props);
		console.log('HomeComponent Constructor')
		this.state = {
			refreshing: false
		};
	}
	componentWillMount() {
		//this._alertAndVibrate(1000);
		console.log('App Mounted');
	}
	_onRefresh = () => {
		//setTimeout(()=> this.state.refreshing = false, 6000);
		this._wait(2000);
		this._alertAndVibrate();
	}
	_wait = (ms) => {
		var start = new Date().getTime();
		var end = start;
		while(end < start + ms) {
		  end = new Date().getTime();
	   }
	}
	_onAlertPressed = () => {
		this._alertAndVibrate(1000);
	}
	_alertAndVibrate = (delay) => {
		setTimeout(function(){
			Vibration.vibrate([300, 300, 1000], true);
			Alert.alert(
				'Hello from Indasys',
				'This is just a simple app to test the quick creation and deployment of cross-platform mobile apps. It doesn\'t do anything. Well, it opens our website - that\'s something.',
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
		}, delay || 100); 
	}
	render() { 
		return (
			<ScrollView 
				contentContainerStyle={{backgroundColor:'#fff',justifyContent:'center',alignItems:'center',flex:1}} 
				horizontal={false} 
				refreshControl={<RefreshControl enabled={this.props.allowRefresh} refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}>
				<View style={{marginBottom:20,alignItems:'center',justifyContent:'center'}}>
					<Image source={require('../assets/images/logo.png')} />
				</View>
				<Card title="Custom Apps by Indasys" style={[{color: '#009', justifyContent: 'center', alignItems: 'center'}]}>
					<Text style={{textAlign: 'center'}}>
						Indasys is a custom software and app devloper with locations in Saint Petersburg, FL, and New York, NY.
						Indasys builds line of business apps for the browser and all major mobile platforms.
					</Text>
					<Text style={{color: '#009', display: 'none' }} onPress={() => Linking.openURL('http://www.indasysllc.com/')}>
						Go To Indasys Website
					</Text>
					<View style={this.props.styles.buttonContainer}>
						<Button title="VIEW INDASYS WEBSITE" onPress={() => Linking.openURL('http://www.indasysllc.com/')} />
					</View>
				</Card>
				<View style={{margin:10}}>
					<Text style={{fontSize:10}}>Pull down for popup message.</Text>
				</View>
				{/*
				<View style={{margin:10,justifyContent:'center',alignItems: 'center'}}>
					<Text>Developer Instructions:</Text>
					<Text>Open up App.js to start working on your app!</Text>
					<Text>Changes you make will automatically reload.</Text>
					<Text>Shake your phone to open the developer menu.</Text>
				</View>
				<View style={this.props.styles.buttonContainer}>
					<Button title="TEST ALERT" onPress={this._onAlertPressed} />
				</View>
				*/}
			</ScrollView>
		);
	}
}

export default HomeComponent;