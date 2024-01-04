import React, { useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from 'react-native';

const Screen3 = () => {
  const [registros, setRegistros] = useState([
    { id: '1', monto: '100', categoria: 'Comida', descripcion: 'Almuerzo' },
    { id: '2', monto: '50', categoria: 'Transporte', descripcion: 'Viaje en autobús' },
    // ... otros registros
  ]);

  const [mensaje, setMensaje] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState(null);
  const [nuevoMonto, setNuevoMonto] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const editarRegistro = () => {
    if (registroSeleccionado) {
      // Actualizar el estado local simulando la edición
      setRegistros((prevRegistros) =>
        prevRegistros.map((registro) =>
          registro.id === registroSeleccionado.id
            ? {
                ...registro,
                monto: nuevoMonto,
                categoria: nuevaCategoria,
                descripcion: nuevaDescripcion,
              }
            : registro
        )
      );

      // Mostrar mensaje de edición
      setMensaje('Registro editado correctamente.');
      setModalVisible(false);
    }
  };

  const confirmarEliminacion = (id) => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar este registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => eliminarRegistro(id),
        },
      ],
      { cancelable: false }
    );
  };

  const eliminarRegistro = (id) => {
    // Filtrar el estado local para simular la eliminación
    setRegistros((prevRegistros) => prevRegistros.filter((registro) => registro.id !== id));

    // Mostrar mensaje de eliminación
    setMensaje('Registro eliminado correctamente.');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>ID: {item.id}</Text>
      <Text>Monto: {item.monto}</Text>
      <Text>Categoría: {item.categoria}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Editar"
          onPress={() => {
            setRegistroSeleccionado(item);
            setNuevoMonto(item.monto);
            setNuevaCategoria(item.categoria);
            setNuevaDescripcion(item.descripcion);
            setModalVisible(true);
          }}
        />
        <Button title="Eliminar" onPress={() => confirmarEliminacion(item.id)} color="red" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar y Eliminar Registros</Text>
      <FlatList data={registros} renderItem={renderItem} keyExtractor={(item) => item.id} />

      {mensaje !== '' && <Text style={styles.mensaje}>{mensaje}</Text>}

      {/* Modal de Edición */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Editar Registro</Text>
            <TextInput
              style={styles.input}
              placeholder="Nuevo Monto"
              value={nuevoMonto}
              onChangeText={(text) => setNuevoMonto(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nueva Categoría"
              value={nuevaCategoria}
              onChangeText={(text) => setNuevaCategoria(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nueva Descripción"
              value={nuevaDescripcion}
              onChangeText={(text) => setNuevaDescripcion(text)}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancelar" onPress={() => setModalVisible(!modalVisible)} />
              <Button title="Guardar" onPress={editarRegistro} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  mensaje: {
    color: 'green',
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default Screen3;
