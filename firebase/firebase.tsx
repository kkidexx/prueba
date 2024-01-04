// FIREBASE 
import { ref, set, onValue, update, remove } from 'firebase/database';
import { db } from '../config/Config';



export const  writeUserData =(ID:string, Monto:string, Categoria:string, Descripción:string) => {

  set(ref(db, 'basean/' + ID), {
    Monto: Monto,
    Categoria: Categoria,
    Descripción : Descripción
  });
}