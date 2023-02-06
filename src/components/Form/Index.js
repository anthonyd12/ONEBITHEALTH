import React, {useState} from "react"
import {View,
        Text,
        TextInput,
        TouchableOpacity,
        Vibration,
        Pressable,
        Keyboard
      } from 'react-native'
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form(){

  const [altura, setAltura] = useState(null)
  const [peso,setPeso] = useState(null)
  const [msgImc,setMsgImc] = useState("Preencha os espaços vazios")
  const [imc,setImc] = useState(null)
  const [textoBotao,setTextoBotao] = useState("Calcule")
  const [errorMsg,setErrorMsg]=useState(null)

  function calcularImc(){
    return setImc((peso/(altura*altura)).toFixed(2))
  }

  function verificarImc(){
    if(imc == null){
      Vibration.vibrate();
      setErrorMsg("Campo obrigatório***")
    }
  }

  function validar(){
    if(altura != null && peso != null){
      calcularImc()
      setAltura(null)
      setPeso(null)
      setMsgImc("Seu IMC é: ")
      setTextoBotao("Calcule de novo")
      setErrorMsg(null)

      return
    }
    verificarImc()
    setImc(null)
    setTextoBotao("Calcule")
    setMsgImc("Preencha os espaços vazios")
  }

    return(
      <View style={styles.formContext}>
        <View style={styles.form} >
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMsg}>{errorMsg}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMsg}>{errorMsg}</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder="Ex: 45.535"
            keyboardType="numeric"/>

            <TouchableOpacity
            style={styles.buttonCalcular}
            onPress={() => {
              validar()
              }}>
                <Text 
                style={styles.textButtonCalcule}>{textoBotao}
                </Text>
              </TouchableOpacity>
            
        </View>
        <ResultImc messageResultImc={msgImc} resultImc={imc}/>
      </View>  
    );
}
