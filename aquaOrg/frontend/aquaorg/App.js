import 'react-native-gesture-handler';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import { useState, useEffect, useMemo } from 'react';

import { AuthContext } from "./context/context"
import Login from './screens/auth/Login';
import Registration from './screens/auth/Registration';
import ResetPassword from './screens/auth/ResetPassword';
import Donation from './screens/Donation';
import Event from './screens/Event';
import Home from './screens/Home';
import Info from './screens/Info';
import QuestionAndAnswers from './screens/QuestionAndAnswers';
import Profile from './screens/user/Profile';
import Settings from './screens/user/Settings';
import Page1 from "./screens/welcome/Page1";
import Page2 from "./screens/welcome/Page2";
import Page3 from "./screens/welcome/Page3";
import Page4 from "./screens/welcome/Page4";
import Page5 from "./screens/welcome/Page5";
import Splash from './screens/other/Splash';

//internal styling
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const Drawer = createDrawerNavigator()
const Bottom = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeScreens = () => (
  <Bottom.Navigator screenOptions={{ headerShown: false }} initialRouteName="First_Home">
    <Bottom.Screen name="Profile" component={Profile} />
    <Bottom.Screen name="First_Home" component={Home} />
    <Bottom.Screen name="Settings" component={Settings} />
  </Bottom.Navigator>
)

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  const [isLoading, setIsLoading] = useState(true)
  const [userAuth, setUserAuth] = useState(null)

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false)
        setUserAuth("1234")
      },
      register: () => {
        setIsLoading(false)
        setUserAuth("1234")
      },
      logout: () => {
        setIsLoading(false)
        setUserAuth(null)
      },
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }


  if (!loaded) return null

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {(userAuth) ? (
          <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name='Home' component={HomeScreens} />
            <Drawer.Screen name='Info' component={Info} />
            <Drawer.Screen name='QuestionAndAnswers' component={QuestionAndAnswers} options={{ title: "Question & Answers" }} />
            <Drawer.Screen name='Event' component={Event} />
            <Drawer.Screen name='Donation' component={Donation} />
          </Drawer.Navigator>
        )
          : (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Registration" component={Registration} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
              <Bottom.Screen name="Page1" component={Page1} />
              <Bottom.Screen name="Page2" component={Page2} />
              <Bottom.Screen name="Page3" component={Page3} />
              <Bottom.Screen name="Page4" component={Page4} />
              <Bottom.Screen name="Page5" component={Page5} />
            </Stack.Navigator>
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

