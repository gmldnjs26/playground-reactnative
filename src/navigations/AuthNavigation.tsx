import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';
import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthStack = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: 'black',
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'green',
    },
    headerTitleStyle: {
      fontSize: 16,
    },
    cardStyle: {
      backgroundColor: 'white',
    },
  },
  screens: {
    AuthHome: {
      screen: AuthHomeScreen,
      options: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: '로그인',
      },
    },
    SignUp: SignUpScreen,
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
