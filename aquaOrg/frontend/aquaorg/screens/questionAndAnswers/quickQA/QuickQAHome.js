import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FeatureWelcomePage from '../../../components/FeatureWelcomePage'

const QuickQAHome = ({ navigation }) => {
  const FeatureWelcomePageData = {
    title: "Welcome to Quick Question & Answers",
    content: "Quick Q & A is a Simple Question Answers to test you’re knowledge regarding life below water",
    features: [
      {
        id: 1,
        content: "This Q & A have 10 main questions."
      },
      {
        id: 2,
        content: "It can be MCQ, Long or small Questions."
      },
      {
        id: 3,
        content: "Time Limit is 2 minutes."
      },
      {
        id: 4,
        content: "Answers will be validated."
      }
    ],
    button: {
      title: "Start Quiz",
      link: "QuickQuestion"
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FeatureWelcomePage FeatureWelcomePageData={FeatureWelcomePageData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default QuickQAHome