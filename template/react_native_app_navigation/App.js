import 'react-native-gesture-handler';



import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Profile, Screen1, SignIn, CreateAccount } from "./screens/Screens";

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const Screen1Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

// const HomeStackScreen = () => (
//   <HomeStack.Navigator>
//     <HomeStack.Screen name="Home" component={Home} options={{ title: "" }} />
//   </HomeStack.Navigator>
// )

// const Screen1StackScreen = () => (
//   <Screen1Stack.Navigator>
//     <Screen1Stack.Screen name="Screen1" component={Screen1} />
//   </Screen1Stack.Navigator>
// )

// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen name="Home" component={HomeStackScreen} />
//     <Tabs.Screen name="Screen1" component={Screen1StackScreen} />
//   </Tabs.Navigator>
// )

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
      {/* <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Create Account" }} />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
} 
