import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = (props:any) => {

  //destructure
  const { placeId, placeTitle } = props.route.params;

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: placeTitle
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
