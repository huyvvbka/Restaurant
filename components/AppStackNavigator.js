import {
    createAppContainer
} from 'react-navigation'
import {
    createStackNavigator
} from 'react-navigation-stack'
import OnBoardingScreen from './OnBoardingScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import LandingScreen from './LandingScreen'

const AppNavigator = createStackNavigator(
	{
		OnBoardingScreen: {
			screen: OnBoardingScreen,
		},
		LoginScreen: {
			screen: LoginScreen,
		},
		SignupScreen: {
			screen: SignupScreen,
        },
        LandingScreen: {
            screen: LandingScreen,
        },
	},
	{
		initialRouteName: 'OnBoardingScreen',
	}
);

export default createAppContainer(AppNavigator);