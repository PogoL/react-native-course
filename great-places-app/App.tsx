import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlacesNavigator from './navigation/PlacesNavigator';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import placesReducer from './store/places-reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    places: placesReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
