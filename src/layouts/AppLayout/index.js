import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameDetails from '../../pages/GameDetails';
import Home from '../../pages/Home';
import ProfileModal from '../../components/ProfileModal';

const Stack = createStackNavigator();

export default () => (
    <>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GameDetails" component={GameDetails} />
    </Stack.Navigator>
    <ProfileModal />
    </>
    
  )

