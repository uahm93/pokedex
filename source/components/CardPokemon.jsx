import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import { detailsPokemon } from '../services';

export default Details = (props) => {
    
    const [details, setDetails] = useState({});

    useEffect(() => {

        listDetails()

    }, []);

    const listDetails = async () => {
        
        const data = await detailsPokemon(props.endpoint);

        const image = data.sprites.front_default;
        const name  = data.species.name;

        setDetails({
          image,
          name
        })
        
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{details.name}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: details.image
        }}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight:10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 5,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold"
  }
});
