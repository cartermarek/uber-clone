import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";

// setup redux

export default function App() {
	return (
		// View instead of div in React Native
		// Provider - wrapper that injects
		<Provider store={store}>
			<SafeAreaProvider>
				<HomeScreen />
			</SafeAreaProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
