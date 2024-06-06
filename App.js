import {Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/features/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import { SafeAreaProvider} from "react-native-safe-area-context";
import {ModuleButton} from "./src/features/ModuleButton/ModuleButton";
import {ModuleWire} from "./src/features/ModuleWire/ModuleWire";

const thisPlatform = Platform.OS

let Tab =createMaterialBottomTabNavigator()
let TabOptions = {
}
if(thisPlatform === 'ios'){
     Tab = createNativeStackNavigator();
     TabOptions = {
         ...TabOptions,
         unMountOnBlur: true,
     }
}

export default function App() {
  return (
      <SafeAreaProvider>
          <NavigationContainer>
              <Tab.Navigator>
                  <Tab.Screen name="Home" component={Home} />
                  <Tab.Screen name="Button" component={ModuleButton} options={TabOptions} />
                  <Tab.Screen name="Wire" component={ModuleWire} options={TabOptions} />
              </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaProvider>
  );
}

