import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //requisição Http assíncrona
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
    axios.get(url)
    .then(response => { this.setState({ listaItens: response.data }); })
    .catch(error => { console.log(error); });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        {this.state.listaItens.map(item => (<Itens key={item.titulo} item={item}>{item.titulo}</Itens>))}

      </ScrollView>
    );
  }
}
