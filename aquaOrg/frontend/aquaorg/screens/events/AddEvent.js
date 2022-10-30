import { View, Text, Button } from "react-native";
import React from "react";
import { ScreenContainer } from "../../components";

const AddEvent = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View>
        <Text>AddEvent</Text>
        <Button
          title="Login"
          onPress={() => {
            navigation.push("Login");
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default AddEvent;
