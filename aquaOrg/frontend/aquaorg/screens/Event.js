import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { BackgroundContainer } from "../components";
import axios from "axios";
import baseURL from "../store";

const Event = ({ navigation }) => {
  const [topEvents, setTopEvents] = useState();

  const data = [];

  const getEventsData = () => {
    axios
      .get(baseURL + "/aqua-org/events/")
      .then((response) => {
        setTopEvents(response.data.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEventsData();
  }, []);

  function viewAllEvents() {
    navigation.navigate("AllEvents");
  }
  function addEvent() {
    navigation.navigate("AddEvent");
  }
  function viewYourEvents() {
    navigation.navigate("YourEvents", { reloadVal: true });
  }
  function interestedEvents() {
    navigation.navigate("InterestedEvents");
  }

  useEffect(() => {
    setTopEvents(data);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          // padding: 10,
        }}
      >
        <View style={{ flex: 2 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.heading}>Top Events</Text>
            {/* <Button
              uppercase={false}
              mode="contained"
              style={styles.fab}
              onPress={() => viewAllEvents()}
            ></Button> */}

            <TouchableOpacity
              style={styles.fab}
              onPress={() => viewAllEvents()}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 3,
                }}
              >
                View More...
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.topEventsContainer}>
            <View></View>
            <FlatList
              keyExtractor={(key) => {
                return key._id;
              }}
              style={styles.topList}
              horizontal
              data={topEvents}
              renderItem={({ item }) => {
                return (
                  <Card
                    elevation={5}
                    style={styles.eventCard}
                    mode={"elevated"}
                    onPress={() => {
                      navigation.navigate("ViewEvent", { item });
                    }}
                  >
                    <Card.Content>
                      <Title>{item.name}</Title>
                      <Paragraph>
                        <Text
                          style={{
                            fontWeight: "bold",
                          }}
                        >
                          On :{" "}
                        </Text>
                        {item.date}
                      </Paragraph>
                    </Card.Content>
                  </Card>
                );
              }}
            />
          </View>
        </View>

        <View style={{ flex: 1.3 }}>
          <View style={{ flex: 1 }}>
            <Card
              style={{ top: 15, backgroundColor: "#015C92", height: 100 }}
              elevation={5}
            >
              <Card.Content
                style={{
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Title>
                    <Text style={{ color: "white" }}>What is Events ? </Text>
                  </Title>
                  <Paragraph>
                    <Text style={{ color: "white" }}>
                      Click Here to view more information
                    </Text>
                  </Paragraph>
                </View>
                <Image
                  source={require("../assets/questionMark.png")}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                />
              </Card.Content>
            </Card>
          </View>
        </View>
        <View
          style={{
            flex: 2.7,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.menuCard1}
            elevation={5}
            onPress={() => {
              viewAllEvents();
            }}
          >
            <Text style={styles.menuCardHeading}>All Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard2}
            elevation={5}
            onPress={() => {
              viewYourEvents();
            }}
          >
            <Text style={styles.menuCardHeading}>View Your Events</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard3}
            onPress={() => {
              addEvent();
            }}
          >
            <Text style={styles.menuCardHeading}>Add Event</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuCard4}
            elevation={5}
            onPress={() => {
              interestedEvents();
            }}
          >
            <Text style={styles.menuCardHeading}>Interested Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Event;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginLeft: 16,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flexDirection: "column",
  },
  textStyle: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 0,
    margin: 10,
    color: "black",
  },

  eventCard: {
    height: 100,
    width: 170,
    margin: 10,
    backgroundColor: "#BCE6FF",
    borderRadius: 20,
  },
  topList: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#015C92",
  },
  topEventsContainer: {
    paddingRight: 10,
  },

  fab: {
    height: 30,
    width: 100,
    borderRadius: 20,
    padding: 4,
    top: 20,
    backgroundColor: "#015C92",
  },

  menuCard1: {
    backgroundColor: "#53A7DB",

    margin: 10,
    width: 150,
    height: 110,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard2: {
    backgroundColor: "#53A7DB",

    margin: 10,
    width: 150,
    height: 110,
    borderBottomLeftRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard3: {
    backgroundColor: "#53A7DB",

    margin: 10,
    width: 150,
    height: 110,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard4: {
    backgroundColor: "#53A7DB",
    margin: 10,
    width: 150,
    height: 110,
    borderBottomLeftRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCardHeading: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
