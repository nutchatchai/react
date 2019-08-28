import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,TextInput} from 'react-native';

export default class Page1 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: ''
    }
  }

  onPressNext()
  {
    if(this.state.username == "nutchatchai" && this.state.password == "12345678"){
      this.props.navigation.navigate('Main');
    }
    else{
      Alert.alert("wrong");
    }
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text
              style={styles.txt}>
              LOGIN
          </Text>

          <TextInput
            style={styles.txtIn2}
            placeholder="UserName"
            value = {this.state.username}
          />
          <TextInput
            style={styles.txtIn2}
            placeholder="Password"
            value = {this.state.password}
          />

          <View style={{flex:1}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.onPressNext()}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:50
  },
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },

})
