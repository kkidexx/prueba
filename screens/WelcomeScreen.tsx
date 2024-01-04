import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Agregar la imagen con una URL */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      <Text style={styles.text}>ANDY GRANDA</Text>
      <Button title="ACCEDER" onPress={() => navigation.navigate('Tabs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Ocupa el 100% del ancho disponible
    height: '100%', // Ocupa el 100% del alto disponible
    position: 'absolute', // Permite superponer la imagen sobre otros elementos
    opacity: 0.5, // Ajusta la opacidad según sea necesario
  },
  text: {
    position: 'absolute', // Permite superponer el texto sobre la imagen
    top: 20, // Posiciona el texto 20 unidades desde la parte superior
    color: 'white', // Color del texto, ajusta según la visibilidad sobre la imagen
    fontSize: 24, // Tamaño de la fuente, ajusta según tus necesidades
    fontWeight: 'bold', // Peso de la fuente, ajusta según tus necesidades
  },
});

export default WelcomeScreen;
