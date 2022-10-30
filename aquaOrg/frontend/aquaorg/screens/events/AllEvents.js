import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Card,
  Chip,
  FAB,
  IconButton,
  Paragraph,
  Title,
} from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";

const AllEvents = () => {
  const [events, setEvents] = useState();
  const data = [
    {
      _id: 1,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
    {
      _id: 2,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
    {
      _id: 3,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
    {
      _id: 4,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
    {
      _id: 5,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
    {
      _id: 6,
      name: "Beach Cleaning",
      date: "2022-10-01 12:00",
      description:
        "We organize event to clean beatches available in Sri Lanka. By this",
      tags: ["tag 1", "tag 2", "tag 3"],
    },
  ];

  useEffect(() => {
    setEvents(data);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(key) => {
            return key._id;
          }}
          style={styles.topList}
          data={events}
          renderItem={({ item }) => {
            return (
              <Card elevation={5} style={styles.eventCard} mode={"elevated"}>
                <Card.Content>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Title style={{ fontWeight: "bold" }}>{item.name}</Title>

                    <FAB
                      icon="plus"
                      small
                      style={styles.fab}
                      onPress={() => console.log("Pressed")}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Event On :
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                      }}
                    >
                      Description :
                    </Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        fontSize: 15,
                        maxWidth: 300,
                      }}
                    >
                      {item.description}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    {item.tags.map((item, key) => (
                      <Chip
                        // icon="information"
                        textStyle={{
                          fontWeight: "800",
                        }}
                        style={styles.chip}
                        mode="flat"
                        selectedColor="#443F3F"
                        onPress={() => console.log("Pressed")}
                        key={key}
                      >
                        {item}
                      </Chip>
                    ))}
                  </View>
                </Card.Content>
              </Card>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllEvents;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  eventCard: {
    backgroundColor: "#BCE6FF",
    marginVertical: 10,
    borderRadius: 23,
  },

  chip: {
    backgroundColor: "#53A7DB",
    marginRight: 10,
  },

  fab: {
    backgroundColor: "#77BF5E",
  },
});
