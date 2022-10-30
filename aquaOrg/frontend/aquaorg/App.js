import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import "react-native-gesture-handler";

import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Registration";
import ResetPassword from "./screens/auth/ResetPassword";
import Donation from "./screens/Donation";
import Event from "./screens/Event";
import AddEvent from "./screens/events/AddEvent";
import AllEvents from "./screens/events/AllEvents";
import Home from "./screens/Home";
import Info from "./screens/Info";
import QuestionAndAnswers from "./screens/QuestionAndAnswers";
import Profile from "./screens/user/Profile";
import Settings from "./screens/user/Settings";

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackEvent = createStackNavigator();

const HomeScreens = () => (
  <Bottom.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="HomeSc"
  >
    <Bottom.Screen name="Profile" component={Profile} />
    <Bottom.Screen name="HomeSc" component={Home} />
    <Bottom.Screen name="Settings" component={Settings} />
  </Bottom.Navigator>
);

const EventScreens = () => (
  <StackEvent.Navigator initialRouteName="EventSC">
    <StackEvent.Screen
      name="EventSC"
      component={Event}
      options={{ headerShown: false }}
    />
    <StackEvent.Screen
      name="AddEvent"
      component={AddEvent}
      options={{ title: "Add Event" }}
    />

    <StackEvent.Screen
      name="AllEvents"
      component={AllEvents}
      options={{ title: "All Events" }}
    />
  </StackEvent.Navigator>
);

export default function App() {
  const [userAuth, setUserAuth] = useState(true);
  return (
    <NavigationContainer>
      {userAuth == true ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreens} />
          <Drawer.Screen name="Info" component={Info} />
          <Drawer.Screen
            name="QuestionAndAnswers"
            component={QuestionAndAnswers}
          />
          <Drawer.Screen
            name="Event"
            component={EventScreens}
            options={({ route }) => {
              // console.log("test", getFocusedRouteNameFromRoute(route));
              const routeName =
                getFocusedRouteNameFromRoute(route) ?? "EventSc";
              if (typeof routeName == "undefined") return;
              if (routeName == "AddEvent") return { headerShown: false };
            }}
          />
          <Drawer.Screen name="Donation" component={Donation} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
