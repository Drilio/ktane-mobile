import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {Home} from "../Home";
import {SecondPage} from "../SecondPage";

export const MaterialBottomTabNavigator = () => {
    const Tab = createMaterialBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="SecondPage" component={SecondPage} />
        </Tab.Navigator>
    )
}
