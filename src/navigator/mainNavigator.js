import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile68583Navigator from '../features/UserProfile68583/navigator';
import Maps68564Navigator from '../features/Maps68564/navigator';
import Settings68542Navigator from '../features/Settings68542/navigator';
import Settings68527Navigator from '../features/Settings68527/navigator';
import NotificationList68526Navigator from '../features/NotificationList68526/navigator';
import Maps68525Navigator from '../features/Maps68525/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile68583: { screen: UserProfile68583Navigator },
Maps68564: { screen: Maps68564Navigator },
Settings68542: { screen: Settings68542Navigator },
Settings68527: { screen: Settings68527Navigator },
NotificationList68526: { screen: NotificationList68526Navigator },
Maps68525: { screen: Maps68525Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
