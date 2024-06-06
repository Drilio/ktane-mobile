import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "./Home";
import {SecondPage} from "./SecondPage";

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return(
<Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="SecondPage" component={SecondPage} />
</Tab.Navigator>
    )
}
