import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TextInput,
  Button,
  FAB,
  IconButton,
  Chip,
  Snackbar,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import baseURL from "../../store";

const EditEvent = ({ route, navigation }) => {
  const { item } = route.params;
  const [eventName, setEventName] = useState();
  const [oraganizer, setOrganizer] = useState();
  const [description, setDescription] = useState();
  const [eventDate, setEventDate] = useState();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tag, setTag] = useState();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

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
  function addToTags() {
    let existingTags = tags;

    setTag("");

    existingTags.push(tag);
    setTags(existingTags);
    console.log(existingTags);
  }
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    setEventName(item.name);
    setOrganizer(item.organizer);
    setEventDate(item.date);
    setDescription(item.description);
    setTags(item.tags);
  }, []);

  const updateEvent = () => {
    setLoading(true);
    // get this user id from login
    let userID = 1;
    const data = {
      user: userID,
      name: eventName,
      oraganizer: oraganizer,
      date: eventDate,
      description: description,
      tags: tags,
    };

    console.log(data);
    axios
      .put(baseURL + "/aqua-org/events/" + item._id, data)
      .then((response) => {
        setLoading(false);
        if (response.status == 200) {
          setVisible(true);
          setSnackbarMessage("Event Updated Succsesfully!");
          navigation.navigate("YourEvents", { reloadVal: true });
        } else {
          setVisible(true);
          setSnackbarMessage("Failed to Update Event.");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setVisible(true);
        setSnackbarMessage("Something went wrong!");
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.formContainer}>
          <TextInput
            mode="outlined"
            activeOutlineColor="#015C92"
            label="Enter Event Name"
            style={styles.inputField}
            value={eventName}
            onChangeText={(text) => setEventName(text)}
          />
          <TextInput
            mode="outlined"
            label="Enter Organizer Name"
            activeOutlineColor="#015C92"
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
              <Text style={{ color: "white" }}> Date</Text>
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
              <Text style={{ color: "white" }}> TIme</Text>
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
          mode="outlined"
          label="Event Date and Time"
          activeOutlineColor="#015C92"
          value={eventDate}
          style={styles.inputField}
          disabled={true}
          onChangeText={(text) => setEventDate(text)}
        />

        <TextInput
          mode="outlined"
          multiline={true}
          activeOutlineColor="#015C92"
          label="Enter Description about Event... "
          style={styles.inputField}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <TextInput
            mode="outlined"
            activeOutlineColor="#015C92"
            label="Add Tags"
            style={[styles.inputField, styles.inputFieldsmall]}
            value={tag}
            onChangeText={(text) => setTag(text)}
          />
          <IconButton
            style={{
              marginTop: 8,
            }}
            icon="plus"
            size={40}
            color="#53A7DB"
            onPress={() => addToTags()}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 2, marginBottom: 10 }}>
          {tags.map((item, key) => (
            <Chip
              onClose={() => {
                console.log("test test");
                const index = tags.indexOf(item);
                tags.splice(index, 1);
              }}
              textStyle={{
                fontWeight: "800",
              }}
              style={styles.chip}
              mode="flat"
              selectedColor="#443F3F"
              key={key}
            >
              {item}
            </Chip>
          ))}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => updateEvent()}
        >
          <Text style={styles.btnText}> Edit Event</Text>
        </TouchableOpacity>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Dismiss",
            onPress: () => {
              setVisible(false);
            },
          }}
        >
          {snackbarMessage}
        </Snackbar>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditEvent;

const styles = StyleSheet.create({
  formContainer: {
    padding: 5,
  },

  inputField: {
    marginVertical: 10,
  },
  inputFieldsmall: {
    minWidth: 200,
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
    backgroundColor: "#015C92",
    marginTop: 10,
    marginBottom: 30,
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 30,
    width: 300,
    height: 50,
  },

  dateBtn: {
    width: 100,
  },
  addTagsBtn: {
    backgroundColor: "",
  },
  chip: {
    backgroundColor: "#53A7DB",
    marginRight: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginTop: 7,
  },
});
