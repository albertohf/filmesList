import { View, Text, StyleSheet, Image, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Detalhes from '../Detalhes';

export default function Filmes({ data }) {
    const [visible, setVisible] = useState(false);
    console.log('TEXT', data)
 return (
    <View>
        <View style={styles.card}>
        <Text style={styles.title}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.capa} />
        <View style={styles.areaButton}>
            <TouchableOpacity style={styles.button} onPress={()=> setVisible(true)}>
                <Text style={styles.buttonText}>Leia Mais</Text>
            </TouchableOpacity>
        </View>
        </View>

        <Modal transparent={true} visible={visible} animationType='slide'>
            <Detalhes filme={data} voltar={()=> setVisible(false)}/>
        </Modal>
        
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    title: {
        padding: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    areaButton: {
        alignItems: 'flex-end',
        marginTop: -35,
        zIndex: 4,
        marginRight: 15,
    },
    button: {
        width: 100,
        padding: 6,
        opacity: 1,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
  });