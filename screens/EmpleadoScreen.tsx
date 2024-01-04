import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EmpleadoScreen() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(API_EMPLEADO)
      .then((response) => response.json())
      .then((data) => setDatos(data.ropa))
      .catch((error) => console.log(error));
  }, []);

  type empleado = {
    articulo: string;
    precio: string;
    categoria: string;
    color: string;
    // Agrega más campos según la estructura de tus datos
  };

  const API_EMPLEADO = 'https://jritsqmet.github.io/web-api/ropa.json';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API ROPA</Text>
      <FlatList
        data={datos}
        renderItem={({ item }: { item: empleado }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Text style={styles.itemText}>Articulo: {item.articulo}</Text>
            <Text style={styles.itemText}>Precio: {item.precio}</Text>
            <Text style={styles.itemText}>Categoría: {item.categoria}</Text>
            <Text style={styles.itemText}>Color: {item.color}</Text>
          
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.articulo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 8,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
