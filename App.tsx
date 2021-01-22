import React from 'react';

import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
]

export default function App() {
  const [category, setCategory] = React.useState();

  return (
    <Screen>
        <AppPicker
            items={categories}
            placeholder='Category'
            selectedItem={category}
            onSelectItem={(item) => setCategory(item)}
        />
        <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
};
