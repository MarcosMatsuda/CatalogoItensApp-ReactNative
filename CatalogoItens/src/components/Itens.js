import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  StyleSheet 
} from 'react-native';

export default class Itens extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<View style={styles.item}>
			<View style={styles.foto}>
				<Image style={{ width: 100, height: 100 }} source={{ uri: this.props.item.foto }} />
			</View>
			<View style={styles.detalhesItens} >
				<Text style={styles.txtTitulo} >{this.props.item.titulo}</Text>
				<Text style={styles.txtValor}>R$: {this.props.item.valor}</Text>
				<Text style={styles.txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
				<Text style={styles.txtDetalhes}>Data de publicação: {this.props.item.data_publicacao}</Text>
			</View>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		backgroundColor: '#FFF'
	},
	txtTitulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5
	},
	detalhesItens: {
		marginLeft: 20,
		flex: 1
	},
	foto: {
		width: 102,
		height: 102
	},
	txtValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 14
	}

});
