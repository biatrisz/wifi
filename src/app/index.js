import React ,{useEffect, useState } from "react";
import {View} from 'react-native';
import Aviso from './components/aviso';
import NetInfo from '@react-native-community/netinfo';

export default function App(){
  const [isConnected, setIsConnected] = useState (null);

  useEffect (() => {
    const unsubscribe = NetInfo.addEventListener((state) =>{
    } );
    return() =>{
      unsubscribe();
    };
  }, []);
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isConnected === null ? (
        <Aviso texto= "Verificando conexão..." isconnected= {isConnected}/>
      ) : isConnected ? (
        <Aviso texto= "Conectado à internet" isconnected= {isConnected}/>
      ) : (
        <Aviso texto = "Desconectado da internet" isconnected= {isConnected}/>
      )}
    </View>
  )
}