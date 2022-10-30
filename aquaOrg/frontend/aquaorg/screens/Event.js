import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { BackgroundContainer } from "../components";

const Event = ({ navigation }) => {
  const [topEvents, setTopEvents] = useState();

  const data = [
    { _id: 1, name: "Beach Cleaning", date: "2022-10-01" },
    { _id: 2, name: "Beach Cleaning", date: "2022-10-01" },
    { _id: 3, name: "Beach Cleaning", date: "2022-10-01" },
    { _id: 4, name: "Beach Cleaning", date: "2022-10-01" },
    { _id: 5, name: "Beach Cleaning", date: "2022-10-01" },
    { _id: 6, name: "Beach Cleaning", date: "2022-10-01" },
  ];

  function viewAllEvents() {
    console.log("sdsdsd");
  }
  function addEvent() {
    navigation.navigate("AddEvent");
  }
  function viewYourEvents() {
    console.log("sdsdsd");
  }
  function interestedEvents() {
    console.log("sdsdsd");
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
            <Button
              uppercase={false}
              mode="contained"
              style={styles.fab}
              onPress={() => console.log("Pressed")}
            >
              View More...
            </Button>
          </View>

          <View style={styles.topEventsContainer}>
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
                  >
                    <Card.Content>
                      <Title>{item.name}</Title>
                      <Paragraph>On : {item.date}</Paragraph>
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
          <Card
            style={styles.menuCard1}
            elevation={5}
            onPress={() => {
              viewAllEvents();
            }}
          >
            <Card.Content
              style={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={styles.menuCardHeading}>All Events</Text>
              {/* <Avatar.Icon size={24} icon="folder" /> */}
            </Card.Content>
          </Card>
          <Card
            style={styles.menuCard2}
            elevation={5}
            onPress={() => {
              viewYourEvents();
            }}
          >
            <Card.Content>
              <Text style={styles.menuCardHeading}>View Your Events</Text>
            </Card.Content>
          </Card>
          {/* <Card
            style={styles.menuCard3}
            elevation={5}
            onPress={() => {
              addEvent();
            }}
          >
            <Card.Content>
              <Text style={styles.menuCardHeading}>Add Event</Text>
            </Card.Content>
          </Card> */}
          <TouchableOpacity
            style={styles.menuCard3}
            onPress={() => {
              addEvent();
            }}
          >
            <Text style={styles.menuCardHeading}>Add Event</Text>
          </TouchableOpacity>
          <Card
            style={styles.menuCard4}
            elevation={5}
            onPress={() => {
              interestedEvents();
            }}
          >
            <Card.Content>
              <Text style={styles.menuCardHeading}>Interested Events</Text>
            </Card.Content>
          </Card>
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
    fontSize: 25,
    padding: 0,
    margin: 10,
    color: "black",
  },

  eventCard: {
    height: 100,
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
    height: 40,
    borderRadius: 20,
    top: 5,
    backgroundColor: "#015C92",
  },

  menuCard1: {
    backgroundColor: "#53A7DB",
    flexWrap: "wrap",
    margin: 10,
    width: 150,
    height: 110,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  menuCard2: {
    backgroundColor: "#53A7DB",
    flexWrap: "wrap",
    margin: 10,
    width: 150,
    height: 110,
    borderBottomLeftRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  menuCard3: {
    backgroundColor: "#53A7DB",
    flexWrap: "wrap",
    margin: 10,
    width: 150,
    height: 110,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  menuCard4: {
    backgroundColor: "#53A7DB",
    flexWrap: "wrap",
    margin: 10,
    width: 150,
    height: 110,
    borderBottomLeftRadius: 30,
    borderTopStartRadius: 30,
  },
  menuCardHeading: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
