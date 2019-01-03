import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import FadeInView from '../components/FadeInView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WelcomeScreen extends Component {
  render() {
    const { container, fadeIn, text } = styles;

    return (
      <View style={container}>
        <FadeInView style={fadeIn}>
          <Text style={text}>
              Welcome to Polish Air Pollution App based on gios.gov.pl data
          </Text>
        </FadeInView>
        <Button
          large
          title="Tap me!"
          backgroundColor="#009688"
          iconRight={{ name: 'keyboard-backspace' }}
          onPress={() => this.props.navigation.navigate('main')} // eslint-disable-line react/destructuring-assignment
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
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    margin: 20,
  },
  fadeIn: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT / 4 },
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigate: PropTypes.object,
};

WelcomeScreen.defaultProps = {
  navigate: {},
};

export default WelcomeScreen;