import React from 'react';
import { View, Text } from 'react-native';
import Feed from './feed';


const MyNotes = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyNotes</Text>
    </View>
  )
}

MyNotes.navigationOptions = {
  title: 'MyNotes'
}

export default MyNotes