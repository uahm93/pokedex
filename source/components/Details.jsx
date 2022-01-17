import React, { useState,useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable
} from 'react-native';

import { detailsPokemon } from '../services';

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title} >{name}</Text>
  </View>
);

export default ({ navigation }) => {

  const url = navigation.getParam('url')

  const [name, setName] = useState('');
  const [abilities, setabilities] = useState([]);
  const [showMovements, setShowMovements] = useState(false);
  const [movements, setMovements] = useState([]);
  const [forms, setForms] = useState([]);
  const [skills, setSkills] = useState([]);
  const [sprites, setSprites] = useState({
    front: '',
    back: '',
  });

  useEffect(() => {

    listDetails()

  }, []);

  const listDetails = async () => {
    
    let listForms = []
    const data = await detailsPokemon(url);
    
    setName(data.species.name)
    setabilities(data.abilities)
    setMovements(data.moves)
    setSprites({
      front: data.sprites.front_default,
      back: data.sprites.back_default
    })

    const { types } = await detailsPokemon(url)
    
    /* Obtiene el tipo de habilidades  */
    types.map( ({ type }) => { listForms = [...listForms, type.name] } )

    setForms(listForms)

  }

  const handleShowMovements = () => {

    let lisMovements = []
    setShowMovements(showMovements ? false : true)

    movements.map( ({ move }) => { lisMovements = [...lisMovements, { url: move.url, name: move.name }] } )

    setSkills(lisMovements)
  }

  return (
    
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      
      <View style={styles.containerImages} >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: sprites.front
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: sprites.back
          }}
        />
      </View>
      <View style={styles.viewForm}>
        <Text style={styles.subtitle} >Type attack</Text>
        <FlatList
          data={forms}
          numColumns={2}
          keyExtractor={ ({ item, index }) => index+'at'}
          renderItem={ ({ item }) => (
            <View style={styles.abilities} >
              <View style={styles.item}>
                <Text style={styles.title} >{item}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.viewForm}>
        <Text style={styles.subtitle} >Abilities</Text>
        <FlatList
          data={abilities}
          numColumns={2}
          keyExtractor={ ({ item, index }) => index+'ab'}
          renderItem={ ({ item}, ) => (
            <View style={styles.abilities} >
              <Item name={item.ability.name} />
            </View>
          )}
        />
      </View>
      <View style={styles.viewForm}>
        <Pressable 
          style={styles.button} 
          onPress={() => handleShowMovements()} >
          <Text style={styles.titleButton}>Show movements</Text>
        </Pressable>
        
        {
          showMovements ? (
            <FlatList
              data={skills}
              numColumns={2}
              keyExtractor={ ({ item, index }) => index}
              renderItem={ ({ item, index}, ) => (
                <TouchableOpacity key={index} style={styles.movements} onPress={()=> navigation.navigate('Movements', { url: item.url })} >
                  <Item name={item.name} />
                </TouchableOpacity>
              )}
            />
          ) : null
        }
      </View>
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  abilities: {
    padding: 5,
  },
  viewForm: {
    flex: 1,
    paddingTop: 10,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#c62828",
    padding: 15,
    borderWidth: 3,
    marginVertical: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  item: {
    backgroundColor: "#feca1b",
    padding: 15,
    borderWidth: 3,
    marginVertical: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  movements: {
    backgroundColor: "#3761a8",
    padding: 15,
    borderWidth: 3,
    marginVertical: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  title: {
    fontSize: 18
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  containerImages: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
  },
    
});