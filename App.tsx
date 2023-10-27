import React from 'react';
import {Button, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RegularView" component={RegularView} />
          <Stack.Screen name="ViewWithSafeArea" component={ViewWithSafeArea} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('RegularView');
        }}
        title="Navigate To Regular View"
      />
      <Button
        onPress={() => {
          navigation.navigate('ViewWithSafeArea');
        }}
        title="Navigate To View With Safe Area"
      />
    </View>
  );
}

function RegularView() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Regular View</Text>
    </View>
  );
}

function ViewWithSafeArea() {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>View with Safe Area</Text>
    </SafeAreaView>
  );
}

export default App;
