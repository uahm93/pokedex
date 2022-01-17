import React, { useState,useEffect } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import { getListOfPokemon } from '../services';
import CardPokemon from './CardPokemon';

export default Details = ({ navigation }) => {
    
    const [list, setList] = useState([]);

    useEffect(() => {

        listData()

    }, []);

    const listData = async () => {
        
        const data = await getListOfPokemon();

        setList( data )
    }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        numColumns={3}
        renderItem={ ({ item, index }) => (
          <TouchableOpacity key={index} onPress={()=> navigation.navigate('Details', { url: item.url })} >
            <CardPokemon endpoint={item.url} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
