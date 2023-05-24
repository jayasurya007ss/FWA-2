import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';

import UserScreen from './UserScreen';
import UserLoginScreen from '../Screens/UserLoginScreen';
import UserHomeScreen from '../Screens/UserHomeScreen';

import UserConnectScreen from './UserConnectScreen';


import UserSettingScreen from './UserSettingScreen';
//                          Settings Options
import UserPreferencesScreen from './UserPreferencesScreen';
import UserSoftwareScreen from './UserSoftwareScreen';
import UserBackupScreen from './UserBackupScreen';

import GeneralStatusInfo from './GeneralStatusInfo'
import Support from './Support';




import AdminInternalStatus from './AdminInternalStatus';
import AdminAdvanceScreen from './AdminAdvanceScreen';
import AdminHomeScreen from '../Screens/AdminhomeScreen';
import AdminScreen from './AdminScreen';
import AdminLoginScreen from '../Screens/AdminLoginScreen';
import AdminSettingsScreen from './AdminSettingsScreen';
import AdminNetworkScreen from './AdminNetworkScreen';
import AdminStatisticScreen from './AdminStatisticScreen';
import AdminAboutUs from './AdminAboutUs';
import AdminDiagnostics from './AdminDiagnostics';
import AdminDevicesInfo from './AdminDevicesInfo';


//                    Advance Options

import AdminCellularScreen from './AdminCellularScreen';
import AdminSimScreen from './AdminSimScreen';
import AdminLanScreen from './AdminLanScreen';
import AdminDNSScreen from './AdminDNSScreen';


import AdvanceSettings from './AdvanceSettings';
//                 Advance Settings Options

import WWANSettings from './WWANSettings';
import NATSettings from './NATSettings';
import FIREWALLSettings from './FIREWALLSettings';
import WLANSettings from './WLANSettings';
import UPNP_DLNA_MDNS from './UPNP_DLNA_MDNS';
import ACCOUNTSettings from './ACCOUNTSettings';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{ animationEnabled: false, header: () => null }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ animationEnabled: true, header: () => null }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="User"
          options={{ animationEnabled: true, header: () => null }}
          component={UserLoginScreen}
        />
        <Stack.Screen
          name="Admin"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminLoginScreen}
        />
        <Stack.Screen
          name="UserHome"
          options={{ animationEnabled: true, header: () => null }}
          component={UserHomeScreen}
        />
        <Stack.Screen
          name="AdminHome"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminHomeScreen}
        />

        <Stack.Screen
          name="UserSettingScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserSettingScreen}
        />

        <Stack.Screen
          name="UserConnectScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserConnectScreen}
        />

        <Stack.Screen
          name="UserScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserScreen}
        />

        <Stack.Screen
          name="Support"
          options={{ animationEnabled: true, header: () => null }}
          component={Support}
        />
        <Stack.Screen
          name="AdminScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminScreen}
        />
        <Stack.Screen
          name="AdminSettingsScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminSettingsScreen}
        />


        <Stack.Screen
          name="AdminNetworkScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminNetworkScreen}
        />
        <Stack.Screen
          name="AdminStatisticScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminStatisticScreen}
        />
        <Stack.Screen
          name="UserPreferencesScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserPreferencesScreen}
        />
        <Stack.Screen
          name="UserSoftwareScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserSoftwareScreen}
        />

        <Stack.Screen
          name="UserBackupScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserBackupScreen}
        />
        <Stack.Screen
          name="AdminAdvanceScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminAdvanceScreen}
        />

        <Stack.Screen
          name="AdminAboutUs"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminAboutUs}
        />
        <Stack.Screen
          name="AdminInternalStatus"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminInternalStatus}
        />

        <Stack.Screen
          name="AdminDiagnostics"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminDiagnostics}
        />


        <Stack.Screen
          name="AdminDevicesInfo"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminDevicesInfo}
        />

        <Stack.Screen
          name="AdminCellularScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminCellularScreen}
        />

        <Stack.Screen
          name="AdminDNSScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminDNSScreen}
        />

        <Stack.Screen
          name="AdminSimScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminSimScreen}
        />


        <Stack.Screen
          name="AdminLanScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminLanScreen}
        />
        <Stack.Screen
          name="GeneralStatusInfo"
          options={{ animationEnabled: true, header: () => null }}
          component={GeneralStatusInfo}
        />
        <Stack.Screen
          name="AdvanceSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={AdvanceSettings}
        />

        <Stack.Screen
          name="WWANSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={WWANSettings}
        />
        <Stack.Screen
          name="NATSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={NATSettings}
        />

        <Stack.Screen
          name="FIREWALLSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={FIREWALLSettings}
        />

        <Stack.Screen
          name="WLANSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={WLANSettings}
        />


        <Stack.Screen
          name="UPNP_DLNA_MDNS"
          options={{ animationEnabled: true, header: () => null }}
          component={UPNP_DLNA_MDNS}
        />

        <Stack.Screen
          name="ACCOUNTSettings"
          options={{ animationEnabled: true, header: () => null }}
          component={ACCOUNTSettings}
        />
      </Stack.Navigator>


    </NavigationContainer>
  );
};

export default MainNavigator;