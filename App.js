import { StatusBar } from 'expo-status-bar';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/Home";
import {SecondPage} from "./src/SecondPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {SafeAreaConsumer, SafeAreaProvider} from "react-native-safe-area-context";
const thisPlatform = Platform.OS

let Tab =createMaterialBottomTabNavigator()

if(thisPlatform === 'ios'){
     Tab = createNativeStackNavigator();
}

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="Home" component={Home} />
                  <Tab.Screen name="SecondPage" component={SecondPage} />
              </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
