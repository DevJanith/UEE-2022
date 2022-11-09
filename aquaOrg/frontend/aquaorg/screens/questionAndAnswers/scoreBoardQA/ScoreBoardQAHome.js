import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import FeatureWelcomePage from '../../../components/FeatureWelcomePage'

const ScoreBoardQAHome = ({ navigation }) => {
  const FeatureWelcomePageData = {
    title: "Welcome to Global Score Board",
    content: "Global Score Board will rank scores according to asc act and you’re score will be part of it",
    features: [
      {
        id: 1,
        content: "In here you can view you’re rank."
      },
      {
        id: 2,
        content: "You can hide you’re rank from public."
      },
      {
        id: 3,
        content: "You can remove you’re rank details."
      }, 
    ],
    button: {
      title: "View Score Board ...",
      link: "ScoreBoard"
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

export default ScoreBoardQAHome