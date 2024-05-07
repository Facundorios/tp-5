import React from 'react'
import {Text, Button} from 'react-native'

function Home({navigation }) {
  return (
    <>
    <Text>Home</Text>
    <Button title="Go to App" onPress={() => navigation.navigate('App')}/>
    
    </>

  )
}

export default Home