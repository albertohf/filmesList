import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Detalhes({filme, voltar}) {
 return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse: </Text>
        <Text style={styles.descricao}>{filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    height: '80%',
    width: '90%',
    backgroundColor: '#121212',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  }
})