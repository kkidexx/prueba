import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { writeUserData, deleteUserData } from '../firebase/firebase'; // Asume que hay una función deleteUserData en el archivo firebase

const Screen1 = () => {
  const [id, setId] = useState('');
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const mostrarAlerta = (mensaje) => {
    Alert.alert('Aviso', mensaje);
  };

  const agregarGasto = () => {
    if (id === '' || monto === '' || categoria === '' || descripcion === '') {
      setMensaje('Por favor, complete todos los campos.');
      return;
    }

    setId('');
    setMonto('');
    setCategoria('');
    setDescripcion('');

    mostrarAlerta('Gasto agregado correctamente.');
  };

  const Guardar = () => {
    writeUserData(id, monto, categoria, descripcion)
      .then(() => {
        // Después de registrar, borra los datos
        deleteUserData(id);
        mostrarAlerta('Gasto agregado y datos borrados correctamente.');
      })
      .catch((error) => {
        console.error('Error al agregar el gasto: ', error);
        mostrarAlerta('Error al agregar el gasto. Por favor, inténtelo de nuevo.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Gasto</Text>

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={id}
        onChangeText={(text) => setId(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Monto"
        value={monto}
        onChangeText={(text) => setMonto(text)}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
      />

      {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}

      <Button title="REGISTRAR" onPress={Guardar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  mensaje: {
    color: 'green',
    marginBottom: 16,
  },
});

export default Screen1;
