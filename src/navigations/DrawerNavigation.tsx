import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../screens/map/MapHomeScreen';
import FeedHomeScreen from '../screens/feed/FeedHomeScreen';
import CalendarHomeScreen from '../screens/calendar/CalendarHomeScreen';
import {createStaticNavigation} from '@react-navigation/native';

const MainDrawer = createDrawerNavigator({
  screens: {
    Map: MapHomeScreen,
    Feed: FeedHomeScreen,
    Calendar: CalendarHomeScreen,
  },
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
