import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { detailsPokemon } from '../services';

export default Details = ({ navigation }) => {
    
    const url = navigation.getParam('url')

    const [movement, setMovement] = useState({
        name: '',
        description: ''
    });
    
    useEffect(() => {

        listDetails()

    }, []);

    const listDetails = async () => {
        
        const data = await detailsPokemon(url)
        
        setMovement({
            name: data.name,
            description: data.effect_entries[0].effect
        })
    }

  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.name}>{movement.name}</Text>
            <Text style={styles.description}>{movement.description}</Text>
        </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
  }
});
