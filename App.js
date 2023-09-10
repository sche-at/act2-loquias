import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const Profile = () => {
  return (
    <View>
      <Image source={require('./assets/icon1.jpg')} style= {styles.profile}/>     
    </View>
  )
};



export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
    <View style={styles.signin}>
      <Text style={{fontFamily:'Calibri' ,color: 'red',fontSize: '13px', fontWeight: 'bold'}}>Sign in</Text>
      <Image source={require('./assets/yticon.png')} style= {styles.yt}/>
      <Image source={require('./assets/icon2.jpg')} style= {styles.karl}/>
      <Image source={require('./assets/icon3.jpg')} style= {styles.karlami}/>
      <Image source={require('./assets/icon4.jpg')} style= {styles.patrick}/>
    </View>
    <View style ={styles.playlist}>
      <Text style={{fontFamily: 'arial', fontWeight:'bold', fontSize: '10px'}}> Playlist</Text>
    </View>
    <View style ={styles.view}>
      <Text style={{fontFamily: 'arial', fontSize: '8px'}}> View All </Text>
    </View>
    <View style ={styles.basta}>
      <Text style={{fontFamily: 'arial', fontSize: '15px', color: 'gray'}}>{'>'}</Text>
    </View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
    
    alignItems: 'top',
    justifyContent: 'centertop',
  },
 
  profile: {
    width: 43,
    height: 43,
    borderRadius: 100 / 2,
    margin: '20px',
    marginRight: '280px',
  },
  signin: {
    left: 80,
    padding: '1.5px',
    paddingLeft: '40px',
    borderColor: '#FF0000',
    borderWidth: 1,
    height: 20,
    width: 90,
   bottom: 50,
    flexDirection: 'row',
    
  },
  yt: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: -1,
    left: 13,
    
  },
  karl: {
    width: 353,
    height: 109,
    position: 'absolute',
    top: 70,
    left: -70,

  },
  playlist:{
    left: 23,
    height: 20,
    width: 90,
   bottom: 20,
  },
  view:{
    left: 295,
    height: 20,
    width: 90,
   bottom: 37,
  },
  basta: {
    left: 330,
    height: 30,
    width: 90,
   bottom:61,
  },
  karlami: {
width: 350,
height:250,
top:190,
bottom: 200,
position: 'absolute',
left: -75,
  },

  patrick: {
    position: 'absolute', 
    top: 668,
    width: 400,
    height:38,
    left: -100,
  }



});
