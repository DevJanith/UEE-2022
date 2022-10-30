import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const AddEvent = ({ navigation }) => {
  const [eventName, setEventName] = useState();
  const [oraganizer, setOrganizer] = useState();
  const [description, setDescription] = useState();
  const [eventDate, setEventDate] = useState();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();

    console.log(fDate + "+++" + fTime);
    setEventDate(fDate + " " + fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <TextInput
          label="Enter Event Name"
          style={styles.inputField}
          value={eventName}
          onChangeText={(text) => setEventName(text)}
        />
        <TextInput
          label="Enter Organizer Name"
          value={oraganizer}
          style={styles.inputField}
          onChangeText={(text) => setOrganizer(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.textField}>Select Date and Time</Text>

        <View
          style={{
            marginRight: 10,
          }}
        >
          <Button
            uppercase={false}
            style={styles.dateBtn}
            mode="contained"
            color="#53A7DB"
            onPress={() => {
              showMode("date");
            }}
          >
            Date
          </Button>
        </View>

        <View
          style={{
            marginRight: 10,
          }}
        >
          <Button
            uppercase={false}
            style={styles.dateBtn}
            mode="contained"
            color="#53A7DB"
            onPress={() => {
              showMode("time");
            }}
          >
            Time
          </Button>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <TextInput
        label="Event Date and Time"
        value={eventDate}
        style={styles.inputField}
        onChangeText={(text) => setEventDate(text)}
      />

      <TextInput
        multiline={true}
        label="Enter Description about Event... "
        style={styles.inputField}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Button
        style={styles.submitButton}
        uppercase={false}
        mode="contained"
        onPress={() => console.log("Submit")}
        color="#015C92"
      >
        Submit Event
      </Button>
    </SafeAreaView>
  );
};

export default AddEvent;

const styles = StyleSheet.create({
  formContainer: {
    padding: 5,
  },

  inputField: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  textField: {
    fontSize: 16,
    marginRight: 10,
    marginTop: 3,
    marginLeft: 3,
  },
  submitButton: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500",
    borderRadius: 30,
    width: 300,
  },
  dateBtn: {
    width: 100,
  },
});
