import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context/context";

import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Registration";
import ResetPassword from "./screens/auth/ResetPassword";
import Donation from "./screens/Donation";
import Event from "./screens/Event";
import Home from "./screens/Home";
import Info from "./screens/Info";
import Splash from "./screens/other/Splash";
import QuestionAndAnswers from "./screens/QuestionAndAnswers";
import Profile from "./screens/user/Profile";
import Settings from "./screens/user/Settings";
import Page1 from "./screens/welcome/Page1";
import Page2 from "./screens/welcome/Page2";
import Page3 from "./screens/welcome/Page3";
import Page4 from "./screens/welcome/Page4";
import Page5 from "./screens/welcome/Page5";

import AddEvent from "./screens/events/AddEvent";
import AllEvents from "./screens/events/AllEvents";
import YourEvents from "./screens/events/YourEvents";
import InterestedEvents from "./screens/events/InterestedEvents";
import ViewEvent from "./screens/events/ViewEvent";
import ViewEventUser from "./screens/events/ViewEventUser";
import EditEvent from "./screens/events/EditEvent";
import { QuickAnswer, QuickQAHome, QuickQuestion } from "./screens/questionAndAnswers/quickQA";
import { Previous, PreviousQAHome } from "./screens/questionAndAnswers/previousQA";
import { ScoreBoard, ScoreBoardQAHome } from "./screens/questionAndAnswers/scoreBoardQA";
import { login } from "./api";

//internal styling
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackEvent = createStackNavigator();

const HomeScreens = () => (
  <Bottom.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="First_Home"
  >
    <Bottom.Screen name="Profile" component={Profile} />
    <Bottom.Screen name="First_Home" component={Home} />
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
    <StackEvent.Screen
      name="YourEvents"
      component={YourEvents}
      options={{ title: "Your Events" }}
    />
    <StackEvent.Screen
      name="InterestedEvents"
      component={InterestedEvents}
      options={{ title: "Interested Events" }}
    />
    <StackEvent.Screen
      name="ViewEvent"
      component={ViewEvent}
      options={{ title: "Event" }}
    />
    <StackEvent.Screen
      name="ViewEventUser"
      component={ViewEventUser}
      options={{ title: "Event" }}
    />
    <StackEvent.Screen
      name="EditEvent"
      component={EditEvent}
      options={{ title: "Event" }}
    />
  </StackEvent.Navigator>
);

const QuestionAnswerScreens = ({ loginSuccessData }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="QuestionAndAnswersSrc">
    <Stack.Screen name="QuestionAndAnswersSrc" component={() => <QuestionAndAnswers loginSuccessData={loginSuccessData} />} options={{ headerShown: false }} />
    <Stack.Screen name="QuickQAHome" component={QuickQAHome} options={{ title: "Quick Q & A" }} />
    <Stack.Screen name="QuickQuestion" component={QuickQuestion} options={{ title: "Quick Question" }} />
    <Stack.Screen name="QuickAnswer" component={QuickAnswer} options={{ title: "Quick Answer" }} />
    <Stack.Screen name="PreviousQAHome" component={PreviousQAHome} options={{ title: "Previous Q & A" }} />
    <Stack.Screen name="Previous" component={Previous} options={{ title: "Previous" }} />
    <Stack.Screen name="ScoreBoardQAHome" component={ScoreBoardQAHome} options={{ title: "Scoreboard Q & A" }} />
    <Stack.Screen name="ScoreBoard" component={ScoreBoard} options={{ title: "Scoreboard" }} />
  </Stack.Navigator>
)

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);
  const [loginSuccessData, setLoginSuccessData] = useState()
  const [loginErrorData, setLoginErrorData] = useState()
  const [loginIsSuccess, setLoginIsSuccess] = useState(false)
  const [loginsIsPending, setLoginIsPending] = useState(false)
  const [loginIsError, setLoginIsError] = useState(false)

  const authContext = useMemo(() => {
    return {
      login: (data) => {

        setIsLoading(true)
        setLoginIsPending(true)
        login(data)
          .then((response) => {
            console.log(response.data.result);
            setLoginSuccessData(response.data.result)
            setUserAuth(response.data.token);
            setIsLoading(false)
            setLoginIsPending(false)
            setLoginIsSuccess(true)
            alert("login Success")
          })
          .catch((err) => {
            console.log(err);
            setLoginErrorData(err.response)
            setIsLoading(false)
            setLoginIsPending(false)
            setLoginIsError(true)
            alert("login Fail")
          });
      },
      register: () => {
        setIsLoading(false);
        setUserAuth("1234");
      },
      logout: () => {
        setIsLoading(false);
        setUserAuth(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {userAuth ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreens} />
            <Drawer.Screen name="Info" component={Info} />
            <Drawer.Screen
              name="QuestionAndAnswers"
              component={() => <QuestionAnswerScreens loginSuccessData={loginSuccessData} />}
              options={({ route }) => {
                // console.log(getFocusedRouteNameFromRoute(route));
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "QuestionAndAnswersSrc";
                if (typeof routeName == "undefined") return;
                if (
                  routeName == "QuickQAHome" ||
                  routeName == "PreviousQAHome" ||
                  routeName == "ScoreBoardQAHome" ||
                  routeName == "QuickQuestion" ||
                  routeName == "QuickAnswer" ||
                  routeName == "Previous" ||
                  routeName == "ScoreBoard"
                ) return { headerShown: false }
                return { title: "Question &  Answers" }
              }}
            />
            <Drawer.Screen
              name="Event"
              component={EventScreens}
              options={({ route }) => {
                // console.log("test", getFocusedRouteNameFromRoute(route));
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "EventSc";
                if (typeof routeName == "undefined") return;
                if (
                  routeName == "AddEvent" ||
                  routeName == "AllEvents" ||
                  routeName == "YourEvents" ||
                  routeName == "InterestedEvents" ||
                  routeName == "ViewEvent" ||
                  routeName == "ViewEventUser" ||
                  routeName == "EditEvent"
                )
                  return { headerShown: false };
              }}
            />
            <Drawer.Screen name="Donation" component={Donation} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Bottom.Screen name="Page1" component={Page1} />
            <Bottom.Screen name="Page2" component={Page2} />
            <Bottom.Screen name="Page3" component={Page3} />
            <Bottom.Screen name="Page4" component={Page4} />
            <Bottom.Screen name="Page5" component={Page5} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
