
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './Screen/LandingScreen';
import CustomerLanding from './Screen/CustomerLanding';
import HomeScreen from './Screen/HomeScreen';
import CustomerSignUp from './Screen/CustomerSignUp';
import CustomerLogin from './Screen/CustomerLogin';
import MerchantLogin from './Screen/MerchantLogin';
import MerchantSignup from './Screen/MerchantSignup';
import MerchantLanding from './Screen/MerchantLanding';
import MerchantDashboard from './Screen/MerchantDashboard';
import WishlistScreen from './Screen/WishlistScreen';
import ProfileScreen from './Screen/ProfileScreen';
import CategoryScreen from './Screen/CategoryScreen';
import MerchantCategory from './Screen/MerchantCategory';
import MerchantOrders from './Screen/MerchantOrders';
import MerchantProfile from './Screen/MerchantProfile';
import EditProfileScreen from './Screen/EditProfileScreen';
import AddToWishScreen from './Screen/AddToWishScreen';
import CustomerCart from './Screen/CustomerCart';
import CustomerSearch from './Screen/CustomerSearch';
import PlacedOrder from './Screen/PlacedOrder';
import Order from './Screen/Order';
import medicalCategory from './Screen/medicalCategory';
import SeparateOrders from './Screen/SeparateOrders';
import medicineByStore from './Screen/medicineByStore';
import InsertMed from './Screen/InsertMed';
import UpdateMed from './Screen/UpdateMed';
import FilterCategory from './Screen/FilterCategory';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name="CustomerLanding" component={CustomerLanding} options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="CustomerSignUp" component={CustomerSignUp} options={{headerShown:false}} />
        <Stack.Screen name="CustomerLogin" component={CustomerLogin} options={{headerShown:false}} />
        <Stack.Screen name="MerchantLogin" component={MerchantLogin} options={{headerShown:false}} />
        <Stack.Screen name="MerchantLanding" component={MerchantLanding} options={{headerShown:false}} />
        <Stack.Screen name="MerchantSignup" component={MerchantSignup} options={{headerShown:false}} />
        <Stack.Screen name="MerchantDashboard" component={MerchantDashboard} options={{headerShown:false}} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} options={{headerShown:false}} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{headerShown:false}} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown:false}} />
        <Stack.Screen name="MerchantCategory" component={MerchantCategory} options={{headerShown:false}} />
        <Stack.Screen name="MerchantOrders" component={MerchantOrders} options={{headerShown:false}} />
        <Stack.Screen name="MerchantProfile" component={MerchantProfile} options={{headerShown:false}} />
        <Stack.Screen name="AddToWishScreen" component={AddToWishScreen} options={{headerShown:false}} />
        <Stack.Screen name="CustomerCart" component={CustomerCart} options={{headerShown:false}} />
        <Stack.Screen name="CustomerSearch" component={CustomerSearch} options={{headerShown:false}} />
        <Stack.Screen name="PlacedOrder" component={PlacedOrder} options={{headerShown:false}} />
        <Stack.Screen name="Order" component={Order} options={{headerShown:false}} />
        <Stack.Screen name="medicalCategory" component={medicalCategory} options={{headerShown:false}} />
        <Stack.Screen name="SeparateOrders" component={SeparateOrders} options={{headerShown:false}} />
        <Stack.Screen name="medicineByStore" component={medicineByStore} options={{headerShown:false}} />
        <Stack.Screen name="InsertMed" component={InsertMed} options={{headerShown:false}} />
        <Stack.Screen name="UpdateMed" component={UpdateMed} options={{headerShown:false}} />
        <Stack.Screen name="FilterCategory" component={FilterCategory} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}