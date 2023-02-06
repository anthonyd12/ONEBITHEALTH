import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:'100%',
        height:'100%',
        justifyContent: 'space-around',
        backgroundColor:'#fff',
        alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop: 30,
    },
    form:{
        width:'100%',
        height:'100%',
        marginTop:30,
        padding:10,
    },
    formLabel:{
        color:'black',
        fontSize:28,
        paddingLeft:20,
    },
    input:{
        width:'90%',
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalcular:{
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'#6A16F0',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:15,
        marginTop:30,
    },
    textButtonCalcule:{
        fontSize:20,
        color:'#fff',
    },
    errorMsg:{
        fontSize:12,
        color:'red',
        fontWeight:'bold',
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width:'100%',
        height:'50%',
    }

});

export default styles