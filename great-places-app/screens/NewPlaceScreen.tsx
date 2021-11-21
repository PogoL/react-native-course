import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import ImgPicker from '../components/ImgPicker';
import LocationPicker from '../components/LocationPicker';
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions';

const NewPlaceScreen = ({navigation, route}: {navigation:any, route:any}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add Place'
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  const titleChangeHandler = (text:any) => {
    // you could add validation
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage));
    navigation.goBack();
  };

  const imageTakenHandler = (imagePath:any) => {
    setSelectedImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImgPicker onImageTaken={imageTakenHandler}/>
        <LocationPicker />
        <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  }
});
export default NewPlaceScreen;
