import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { CustomHeaderButton } from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = ({navigation, route}: {navigation:any, route:any}) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="search" iconName="md-add" onPress={() => navigation.navigate('NewPlace')} />
        </HeaderButtons>
      )
    });
  }, [navigation]);

  const places = useSelector(state => state.places.places);

  return (
    <FlatList data={places} renderItem={itemData =>
      <PlaceItem
        onSelect={() => {
          navigation.navigate('PlaceDetail', {
            placeTitle: itemData.item.title,
            placeId: itemData.item.id
          });
        }}
        image={itemData.item.imageUri}
        title={itemData.item.title}
        address={null}
      />
    }/>
  );
};

PlacesListScreen.options = (navData:any) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="search" iconName="md-add" onPress={() => alert('search')} />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PlacesListScreen;
