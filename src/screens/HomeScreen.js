import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Button, TextInput} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../styles/styles";

import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }){
    const [people, setPeople] = useState([]);
    const [allPeople, setAllPeople] = useState([]);
    const [searchText, setSearchText] = useState('');

    async function loadPeople() {
        const data = await getPeople();

        setPeople(data);
        setAllPeople(data);
    }

    const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      setPeople(allPeople);
      return;
    }

    const filtered = allPeople.filter((item) => {
      const nomeCompleto = `${item.firstName} ${item.lastName}`.toLowerCase();
      return nomeCompleto.includes(text.toLowerCase());
    });

    setPeople(filtered);
  };

    useFocusEffect(
        useCallback(() => {
            setSearchText('');
            loadPeople();
        }, [])
    )
/*
    useEffect(() => {
        loadPeople();
    }, []);
*/
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pessoas</Text>

            <TextInput
                style={styles.inputSearch}
                placeholder="Pesquisar por nome..."
                placeholderTextColor="#666"
                value={searchText}
                onChangeText={handleSearch}
            />

            <Button
                title="Adicionar Pessoa"
                onPress={() => navigation.navigate("AddEdit")}
            />

            <FlatList 
                data={people}
                keyExtractor={(item) =>item.id.toString()}

                renderItem={({item}) => (
                    <CardPersonal 
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />
        </View>
    );
}

function CardPersonal({item, navigation, refresh}) {
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.name}>
                    {item?.firstName} {item?.lastName}
                </Text>

                <Text style={styles.email}>
                    {item?.email}
                </Text>
                <Text style={styles.email}>
                    {item?.phone}
                </Text>
            </View>

            <View>
                <Button 
                    title="Editar"
                    onPress={() => navigation.navigate("AddEdit", {person:item})}
                />
                <Button 
                    title="Deletar"
                    onPress={async () => {
                        await deletePerson(item.id);
                        refresh();
                    }}
                />
            </View>
        </View>
    );
}
