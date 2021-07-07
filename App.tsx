import React from 'react';

import ListItem from './app/components/lists/ListItem';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
    
  return (
      <Screen>
          <ListingEditScreen />
      </Screen>
  );
};
