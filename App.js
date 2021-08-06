import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    let c;
    let bg;

    parseFloat(props.c) ? c = parseFloat(props.c) : c = 1;
    props.bg ? bg = props.bg : bg = '#121212';


    this.styles = StyleSheet.create({
      area: {
        flex: c,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#303030',
        backgroundColor: bg
      },

      text: {
        fontSize: 22,
        color: '#FFFFFF',
      },
    });
  }

  render() {
    return (

      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text}>{this.props.n}</Text>
      </TouchableOpacity>

    );
  }

}


export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = { result: 0 };

    this.btn = this.btn.bind(this);

  }

  btn(num) {
    let s = this.state;
    let operadores = ["+", "-", "/", "*"];

    if (num == 'C') {
      s.result = 0;
    } else if (num == '=') {
      s.result = eval(s.result);
    } else if (num == '+/-') {
      s.result = s.result * -1;
    } else {
      if (s.result == '0') {
        s.result = num;
      } else {

        console.log(operadores.indexOf(s.result[s.result.length - 1]));
        s.result += num;

      }
    }

    this.setState(s);

  }


  render() {
    return (
      <View style={styles.body}>
        <View style={[styles.linha, styles.areaResultado]}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.linha}>
          <Botao c='2.02' n="C" bg='#242424' onPress={() => { this.btn("C") }} />
          <Botao n="+/-" bg='#242424' onPress={() => { this.btn("+/-") }} />
          <Botao n="/" bg='#242424' onPress={() => { this.btn("/") }} />
        </View>
        <View style={styles.linha}>
          <Botao n="7" onPress={() => { this.btn("7") }} />
          <Botao n="8" onPress={() => { this.btn("8") }} />
          <Botao n="9" onPress={() => { this.btn("9") }} />
          <Botao n="X" bg='#242424' onPress={() => { this.btn("*") }} />
        </View>
        <View style={styles.linha}>
          <Botao n="4" onPress={() => { this.btn("4") }} />
          <Botao n="5" onPress={() => { this.btn("5") }} />
          <Botao n="6" onPress={() => { this.btn("6") }} />
          <Botao n="-" bg='#242424' onPress={() => { this.btn("-") }} />
        </View>
        <View style={styles.linha}>
          <Botao n="1" onPress={() => { this.btn("1") }} />
          <Botao n="2" onPress={() => { this.btn("2") }} />
          <Botao n="3" onPress={() => { this.btn("3") }} />
          <Botao n="+" bg='#242424' onPress={() => { this.btn("+") }} />
        </View>
        <View style={styles.linha}>
          <Botao c='2.02' n="0" onPress={() => { this.btn("0") }} />
          <Botao n="," onPress={() => { this.btn(".") }} />
          <Botao n="=" bg='#a82623' onPress={() => { this.btn("=") }} />
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({

  body: {
    flex: 1,
  },

  linha: {
    flex: 1,
    flexDirection: 'row'
  },

  areaResultado: {
    flex: 1.5,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 30
  },

  result: {
    fontSize: 90,
    color: '#FFFFFF',
  },


})