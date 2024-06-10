import {Platform} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./src/features/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import { SafeAreaProvider} from "react-native-safe-area-context";
import {ModuleButton} from "./src/features/ModuleButton/ModuleButton";
import {ModuleWire} from "./src/features/ModuleWire/ModuleWire";
import House from "./assets/house-solid.svg"
import CircleIcon from "./assets/circle-dot-solid.svg"
import ToiletPaper from "./assets/toilet-paper-solid.svg"
import SymbolIcon from "./assets/icons-solid.svg"
import {ModuleSymbols} from "./src/features/ModuleSymbols/ModuleSymbols";
const thisPlatform = Platform.OS

let Tab =createMaterialBottomTabNavigator();

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
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{tabBarIcon: ((color) => (<House/>))}}
                    />
                    <Tab.Screen
                        name="Button"
                        component={ModuleButton}
                        options={{...TabOptions,tabBarIcon: ((color) => (<CircleIcon/>))}}
                    />
                    <Tab.Screen
                        name="Wire"
                        component={ModuleWire}
                        options={{...TabOptions,tabBarIcon: ((color) => (<ToiletPaper/>))}}
                    />
                    <Tab.Screen
                        name="Symbols"
                        component={ModuleSymbols}
                        options={{...TabOptions,tabBarIcon: ((color) => (<SymbolIcon/>))}}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

