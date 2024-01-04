import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const Screen2 = () => {
  const [registros, setRegistros] = useState([]);
  const [montos, setMontos] = useState([]);

  useEffect(() => {
    // Simulación de datos - Puedes modificar esto según tus necesidades
    const datosSimulados = [
      { id: '1', monto: '100', categoria: 'Comida', descripcion: 'Almuerzo' },
      { id: '2', monto: '50', categoria: 'Transporte', descripcion: 'Viaje en autobús' },
      // ... otros registros
    ];

    const registrosArray = datosSimulados;
    setRegistros(registrosArray);

    const montosArray = registrosArray.map((registro) => registro.monto);
    setMontos(montosArray);
  }, []);

  const traerRegistroPorId = (id) => {
    // Lógica para traer un registro por ID
    const registroEncontrado = registros.find((registro) => registro.id === id);

    if (registroEncontrado) {
      Alert.alert(
        'Detalles del Registro',
        `Categoría: ${registroEncontrado.categoria}\nDescripción: ${registroEncontrado.descripcion}`
      );
    } else {
      Alert.alert('Registro no encontrado', 'No se encontró un registro con el ID proporcionado.');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => traerRegistroPorId(item.id)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Registro ID: {item.id}</Text>
        <Text style={styles.itemText}>Monto: {item.monto}</Text>
        <Text style={styles.itemText}>Categoría: {item.categoria}</Text>
        <Text style={styles.itemText}>Descripción: {item.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Traer Datos por ID</Text>
        {/* Ejemplo: Traer registro con ID '1' */}
        <TouchableOpacity onPress={() => traerRegistroPorId('1')}>
          <Text style={styles.link}>Traer Registro con ID '1'</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Lista de Montos</Text>
        <FlatList
          data={montos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 8,
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
});

export default Screen2;
