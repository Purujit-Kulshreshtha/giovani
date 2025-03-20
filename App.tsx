/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  NavigationProvider,
  TaskRemovedBehavior,
  TermsAndConditionsDialogOptions,
} from '@googlemaps/react-native-navigation-sdk';
import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const termsAndConditionsDialogOptions: TermsAndConditionsDialogOptions = {
  title: 'Terms and Conditions',
  companyName: 'Goivani',
  showOnlyDisclaimer: true,
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationProvider
      termsAndConditionsDialogOptions={termsAndConditionsDialogOptions}
      taskRemovedBehavior={TaskRemovedBehavior.CONTINUE_SERVICE}>
      <View style={backgroundStyle}>
        <Text>Test</Text>
      </View>
    </NavigationProvider>
  );
}

export default App;
