import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from '../Screens/LoginScreen';
import SplashScreen from '../Screens/SplashScreen';


import UserLoginScreen from '../Screens/UserLoginScreen';
import UserHomeScreen from '../Screens/UserHomeScreen';
import UserViewScreen from './UserScreen';
import UserSettingScreen from './UserSettingScreen';
import UserConnectScreen from './UserConnectScreen';
import UserPreferncesScreen from './UserPreferncesScreen';
import UserSoftwareScreen from './UserSoftwareScreen';
import UserBackupScreen from './UserBackupScreen';


import AdminDNSScreen from './AdminDNSScreen';
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
import AdminGps from './AdminGps';
import AdminLogs from './AdminLogs';
import AdminCellularScreen from './AdminCellularScreen';
import AdminSimScreen from './AdminSimScreen';
import AdminLanScreen from './AdminLanScreen';
import AdminZconnectScreen from './AdminZconnectScreen';

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
          name="UserScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserViewScreen}
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
          name="UserPreferncesScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={UserPreferncesScreen}
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
          name="AdminGps"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminGps}
        />

        <Stack.Screen
          name="AdminLogs"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminLogs}
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
          name="AdminZconnectScreen"
          options={{ animationEnabled: true, header: () => null }}
          component={AdminZconnectScreen}
        />
      </Stack.Navigator>



    </NavigationContainer>
  );
};

export default MainNavigator;