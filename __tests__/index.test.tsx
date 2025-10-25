import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from '../src/app/(tabs)/index';

const Tab = createBottomTabNavigator();

const MockNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Index" component={Index} />
    </Tab.Navigator>
  </NavigationContainer>
);

describe('Index Screen', () => {
  it('should render the welcome message', () => {
    render(<MockNavigator />);
    const welcomeMessage = screen.getByText('Welcome!');
    expect(welcomeMessage).toBeVisible();
  });
});
