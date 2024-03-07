import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Lusitana_400Regular, Lusitana_700Bold } from '@expo-google-fonts/lusitana';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView, ScrollView, TouchableHighlight, Modal, Alert, TextInput } from 'react-native';
//import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';



export default function App() {

  const image = require('./resources/bg.jpg')
  const image1 = require('./resources/bg1.jpg')

  console.disableYellowBox = true;

  const [tarefas, setarTarefas] = useState([{

    id: 1,
    tarefa: 'Teste das Minha tarefa 01, nos dias de hoje pedro era louco pela sua vida que ja não tinha mais controle'
  },
  {
    id: 2,
    tarefa: 'Minha tarefa 02'
  },
  {
    id: 3,
    tarefa: 'Minha tarefa 03'
  }
  ]);

  const [modal, setModal] = useState(false);


  let [fontsLoaded] = useFonts({
    Lusitana_400Regular,
    Lusitana_700Bold,
  });

  /*if (!fontsLoaded) {
    return <AppLoading />;
  }*/
  SplashScreen.preventAutoHideAsync()
    .then(() => {
      // Realize todas as tarefas assíncronas necessárias para a inicialização do seu aplicativo
      // Por exemplo, buscar dados, inicializar estado, etc.

      // Assim que seu aplicativo estiver pronto, você pode ocultar a tela de abertura
      SplashScreen.hideAsync();
    })
    .catch(console.warn); // Tratar erros, se houver

  function deletarTarefa(id) {
    alert('Deletado com sucesso a tarefa com id: ' + id + ' neste momento');

    let newTarefas = tarefas.filter(function (val) {
      return val.id != id;
    })

    setarTarefas(newTarefas);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}> Lista de Tarefas</Text>
        </View>
      </ImageBackground>
      <ScrollView >

        {
          tarefas.map(function (val) {
            return (
              <KeyboardAvoidingView style={styles.caixa}>
                <View >
                  <Text style={styles.fonteTarefa}>{val.tarefa}</Text>
                </View>
                <View style={{ width: '130%', alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => deletarTarefa(val.id)} style={{ marginVertical: -30, width: '30%' }}>
                    <AntDesign name="minuscircleo" size={25} color="black" />
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            )
          })

        }
         <TouchableHighlight
                style={styles.openButton2}
                onPress={() => {
                  setModal(setModal);
                }}
              >
                <Text style={styles.textStyle}>Nova Tarefa</Text>
              </TouchableHighlight>

        <Modal
          transparent={true}
          animationType="fade"
          visible={modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput autoFocus={true}></TextInput>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setModal(!modal);
                }}
              >
                <Text style={styles.textStyle}>Salvar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      </ScrollView>

    </View>

  );
}

//no botão de nova tarefa - colocar o botão igual ao de deletar, e escrever por cima meio apagado igual ao do projeto 
//anterio "nova mesagem clicle aqui -> (+)"

const styles = StyleSheet.create({
  image: {
    width: '105%',
    height: 135,
    resizeMode: "cover",
    marginTop: -38

  },
  image1: {
    width: '105%',
    height: 600,
    resizeMode: "cover",
    marginTop: 95,
    backgroundColor: 'rpga(0,0,0,0.1)'
  },
  container: {
    flex: 1,
  },
  coverView: {
    width: '100%',
    height: 100,
    backgroundColor: 'rpga(0,0,0,0.5)'
  },
  textHeader: {
    textAlign: 'left',
    color: '#934C0E',
    fontSize: 32,
    marginTop: 60,
    fontFamily: 'Lusitana_700Bold'

  },
  fonteTarefa: {
    marginTop: 0,
    width: '100%',
    flexDirection: 'column',
    padding: 5,
    fontFamily: 'Lusitana_400Regular',
    fontSize: 18,
    textAlign: 'justify'

  },
  caixa: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    borderStyle: 'solid',
    backgroundColor: '#e3e8e8',
    padding: 10
  },
  //Estilos para nossa modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 5
  },
  openButton: {
    backgroundColor: "#e3e8e8",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  openButton2: {
    backgroundColor: '#e3e8e8',
    borderRadius:3,
    padding: 10,
    elevation: 2,
    marginTop:2,
    marginLeft:2,
    marginRight:2,
    
  },
  textStyle: {
    color: 'rgba(0,0,0,0.7)',
   // fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Lusitana_700Bold',
    fontSize:20
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
   

});
