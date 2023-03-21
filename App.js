import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput ,  Text, View, Dimensions  } from 'react-native';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log("Window Width" + windowWidth);
console.log("Window height"+ windowHeight ); 

  return (
    <View      style={styles.container}    >

      {/* First */}
    <View   style={[styles.Box1, {width : windowWidth , height :windowHeight /5 }]}  >

    <TextInput
        style={styles.input}
        placeholder="Search Here"
        keyboardType="ascii-capable"
      />




    </View>



{/* Second */}
<View  style={styles.Box2}          >





{/* First  */}
<View   style={styles.firstRowofSquare}  >
<View style={styles.square}><Text   style={styles.BoxText}    >Info</Text></View>
<View style={styles.square}><Text   style={styles.BoxText}    >Employes</Text></View>
</View>

{/* Second  */}
<View   style={styles.firstRowofSquare} >
<View style={styles.square}><Text   style={styles.BoxText}    >Custom</Text></View>
<View style={styles.square}><Text   style={styles.BoxText}    >Supplies</Text></View>
</View>
</View>


{/* Third */}
<View   style={[styles.Box3, {width : windowWidth     , height :windowHeight /11  }]}  >




  <View    style={styles.InnerDiv}      >
    
    
    
    
    </View>
    </View>


 


    </View>
  );
}

const styles = StyleSheet.create({



  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width  :290 , 
    backgroundColor :"white", 
    borderRadius : 20, 
  },
  container:{
    
    flex : 1, 
    // justifyContent  :"center",
    alignItems : "center"
  }, 
  BoxText:{
color : "white"
  }, 
  firstRowofSquare:{
flexDirection : "row", 
marginBottom : 40,  

  }, 

  Box2:{
    marginLeft : 40, 
      marginTop :40 ,  
      flexDirection :"column",  
      alignItems : "center"

  }, 
  Box1:{
    marginTop :24 , 
    // flex : 1, 
    justifyContent  :"center", 
    alignItems :"center", 
    borderBottomEndRadius : 12 , 
borderBottomStartRadius :   12 ,
    backgroundColor : "#005A9C", 
  }, 
  Box3:{
    position : "absolute",
    bottom : 0,  
    borderTopEndRadius : 12 , 
    borderTopStartRadius :   12 ,
  // height : 200 , 
    flex : 1,   
    backgroundColor: "#005A9C",   
  }, 
  square: {
    width: 100,
    marginRight : 40,
    flex  : 1, 
    justifyContent :"center", 
    alignItems : "center", 
    height: 100,
    // 
    backgroundColor: "#005A9C",
    borderRadius : 15,
  },






});
