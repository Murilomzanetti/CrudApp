import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Button, TextInput, TouchableOpacity} from "react-native";
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
                style={styles.input}
                placeholder="Pesquisar por nome..."
                placeholderTextColor="#666"
                value={searchText}
                onChangeText={handleSearch}
            />

            <TouchableOpacity 
                style={styles.addButton}
                onPress={() => navigation.navigate("AddEdit")}
            >
                <Text style={styles.addButtonText}>Adicionar Pessoas</Text>
            </TouchableOpacity>

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
            <View style={styles.infoContainer}>
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

            <View style={styles.actionButtons}>
                <TouchableOpacity 
                    style={styles.btnEdit}
                    onPress={() => navigation.navigate("AddEdit", { person: item })}
                >
                    <Text style={styles.btnText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnDelete}
                    onPress={async () => {
                        await deletePerson(item.id);
                        refresh();
                    }}
                >
                    <Text style={styles.btnText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
