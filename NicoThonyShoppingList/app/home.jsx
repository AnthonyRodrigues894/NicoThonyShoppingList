import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
          <View style={styles.imputcontainer}>
            <TextInput 
              color="#fff"
              fontSize={18}
              placeholderTextColor={"#aeaeae"}
              placeholder='Digite o nome do produto...'
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
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
  },
  footer: {
    backgroundColor: '#000000c0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  imputcontainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})