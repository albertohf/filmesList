import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import { useEffect, useState } from 'react';
import Filmes from './src/pages/Filmes';


export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      console.log(response.data);
      setLoading(false);
    }

    fetchData();
  }, [])

  if(loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={50} color="#000"/>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Filmes data={item}/>}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
