import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
	const name = "Mehmet";
	return (
		<View>
			<Text style={styles.textStyle}>This is the Components Screen</Text>
			<Text style={styles.subHeaderStyle}>My Name Is : {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	subHeaderStyle: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
