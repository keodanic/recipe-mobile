import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function About() {
  return (
    <View style={styles.contanier}>
      <Text style={{color:"#F3C622", fontSize:20,}}>Saiba mais sobre o aplicativo que voce esta usando</Text>
    <View style={styles.contanierButton}>
      <TouchableOpacity style={styles.button}>
      <FontAwesome size={28} name="phone-square" color="#fff" />
        <Text style={styles.text}>Sobre o Autor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sobre o APP</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles=StyleSheet.create({
  contanier:{
    flex:1,
    backgroundColor:'#23212C',
  },
  contanierButton:{
    flex:1,
    gap:10,
    justifyContent:'center',
    alignItems:'center'
    
    
  },
  button:{
    padding:15,
    backgroundColor:"#F3C622",
    borderWidth:2,
    borderColor:'#F3C622',
    borderRadius:8,
  },
  text:{

  }

})
