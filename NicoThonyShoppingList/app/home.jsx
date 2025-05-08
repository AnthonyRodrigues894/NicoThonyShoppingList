import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ImageBackground
      source={require('../assets/background.jpg')}
      style={{flex: 1, justifyContent: 'flex-start' }}
      resizeMode='repeat'
      >
        <View style={styles.header}>
          <Text style={styles.tittle}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color="#fff" />
        </View>

        <View style={{ flex: 1}}></View>

        <View style={styles.footer}>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30
  },
  tittle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})