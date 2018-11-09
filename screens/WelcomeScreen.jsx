import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import FadeInView from '../components/FadeInView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WelcomeScreen extends Component {
  static propTypes ={
    navigation: PropTypes.object.isRequired,
    navigate: PropTypes.object.isRequired,
  };

  render() {

    const {navigate} =this.props.navigation;
    return (
      <View style={styles.container}>
        <FadeInView style={styles.fadeInStyle}>
          <Text style={styles.textStyle}>
              Welcome to polish air pollution App based on gios.gov.pl stations
          </Text>
        </FadeInView>
        <Button
          large
          title="Tap me!"
          backgroundColor="#009688"
          iconRight={{ name: 'keyboard-backspace' }}
          onPress={() => navigate('map')}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    margin: 20,
  },
  fadeInStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 4,
  },
};

export default WelcomeScreen;