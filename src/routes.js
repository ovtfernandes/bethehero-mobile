import React from 'react';
// https://reactnavigation.org/docs/getting-started
import { NavigationContainer } from '@react-navigation/native';
// https://reactnavigation.org/docs/hello-react-navigation/
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/detail';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
};