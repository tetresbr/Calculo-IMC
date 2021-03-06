import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" };
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura);
    let s = this.state;
    s.resultado = imc;

    if (s.resultado < 16) {
      s.resultadoText = "Magreza Grave";
    } else if (s.resultado < 17) {
      s.resultadoText = "Magreza Leve";
    } else if (s.resultado < 18.5) {
      s.resultadoText = "Magreza Moderada";
    } else if (s.resultado < 25) {
      s.resultadoText = "Saudavel";
    } else if (s.resultado < 30) {
      s.resultadoText = "Sobrepeso";
    } else if (s.resultado < 35) {
      s.resultadoText = "Obesidade Grau I";
    } else if (s.resultado < 40) {
      s.resultadoText = "Obesidade Grau II";
    } else {
      s.resultadoText = "Obesidade Grau III";
    }
    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inicio}>Calcule Seu IMC</Text>
        <View style={styles.entradas}>
          <TextInput
            placeholder="Peso"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(massa) => {
              this.setState({ massa });
            }}
          ></TextInput>
          <TextInput
            placeholder="Altura"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(altura) => {
              this.setState({altura});
            }}
            id="input-altura"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>
        <Text style={styles.fim}>github.com/tetresbr</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fsfcff",
  },
  inicio:{
    backgroundColor: "#363636",
    alignSelf: "center",
    textAlign: "center",
    color: "lightgray",
    fontSize: 30,
    padding: 60,
    width: "100%",
  },
  entradas: {
    flexDirection: "row",
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: "#363636",
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: "bold",
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 60,
    padding: 15,
  },
  fim: {
    position: "fixed",
    bottom:0,
    left:0,
    backgroundColor: "#363636",
    alignSelf: "right",
    textAlign: "right",
    color: "lightgray",
    fontSize: 20,
    padding: 20,
    width: "100%",
  },
});
