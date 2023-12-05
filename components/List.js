import React from 'react'
import { StyleSheet, View ,Text, TouchableOpacity} from 'react-native'

function List(props) {
  return (
    <>
    <View style={styles.items}>

    <View style={styles.todo}>

    <View style={styles.square}></View>

    <Text style={styles.text}>{props.text}</Text>
    </View>

    <View style={styles.circle}></View>

    </View>
    </>
  )
}
const styles = StyleSheet.create({
          items:{
            backgroundColor:'#fff',
            padding:15,
            borderRadius:10,
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginBottom:20,
          },
          todo:{
            flexDirection:"row",
            alignItems:"center",
            flexWrap:"wrap"
          },
          square:{
            width:24,
            height:24,
            backgroundColor:"#55BCF6",
            opacity: 0.4,
            borderRadius:5,
            marginRight:15
          },
          text:{
            maxWidth:"80%"
          },
          circle:{
            width:12,
            height:12,
            backgroundColor:"#55BCF6",
            borderRadius:5,
            borderWidth:2

          }
})

export default List
