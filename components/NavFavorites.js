import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
	{
		id: "123",
		icon: "home",
		location: "Home",
		destination: "Nexus, Brandon, FL",
	},
	{
		id: "456",
		icon: "home",
		location: "Home2",
		destination: "Diamond Hill, Valrico, FL",
	},
];

const NavFavorites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => (
				<View style={[tw`bg-gray-200`, { height: 0.5 }]} />
			)}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-5`}>
					<Text>
						<Icon
							style={tw`mr-4 rounded-full bg-gray-300 p-3`}
							name={icon}
							type="ionicon"
							color="white"
							size={18}
						/>
						<View>
							<Text style={tw`font-bold text-lg`}>{location}</Text>
							<Text style={tw`text-gray-500`}>{destination}</Text>
						</View>
					</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavorites;

const styles = StyleSheet.create({});
