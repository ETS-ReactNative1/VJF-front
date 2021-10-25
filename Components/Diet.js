import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CheckBox, Text } from 'react-native-elements'
import MyCheckbox from './Checkbox'

const Diet = props => {
	return (
		<View style={styles.container}>
			<Text h4 style={styles.sectionTitle}>
				Renseignez-nous
			</Text>
			<View style={{ marginLeft: 10 }}>
				<MyCheckbox title="Je mange de tout" checkStatus="checked" />
				<MyCheckbox title="Je suis végétarien" checkStatus="unchecked" />
				<MyCheckbox title="Je suis végétalien" checkStatus="unchecked" />
				<MyCheckbox title="Je mange halal" checkStatus="unchecked" />
				<MyCheckbox title="Je mange casher" checkStatus="unchecked" />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		paddingVertical: 10,
		paddingHorizontal: 12,
		borderRadius: 10,
		margin: 15,
		borderColor: '#F2A902',
	},
	sectionTitle: {
		marginBottom: 10,
		marginTop: 10,
		textAlign: 'center',
	},
})

export default Diet
