import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
<View style = {styles.container}>
   <View style = {styles.drawerItemContainer}>
<DrawerItems {...this.props}>

</DrawerItems>
   </View>
   <View style = {styles.logoutContainer}>
       <TouchableOpacity style = {styles.logoutButton} onPress = {()=>{
           this.props.navigation.navigate("WelcomeScreen")
           firebase.auth().signOut()
       }}>
<Text>Logout</Text>
       </TouchableOpacity>
   </View>
</View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
drawerItemContainer :{
    flex:0.8,

},
logoutContainer : {
    flex:0.2,
    justifyContent : "flex-end",
    paddingBottom : 30
},
logoutButton : {
    height : 30,
    width : "100%",
    justifyContent : "center",
    padding : 10
}
})