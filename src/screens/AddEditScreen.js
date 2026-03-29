import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";

import styles from "../styles/styles";

import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
    const person = route.params?.person;

    const [firstName, setFirstName] = useState(person?.firstName || "");
    const [lastName, setLastName] = useState(person?.lastName || "");
    const [email, setEmail] = useState(person?.email || "");
    const [phone, setPhone] = useState(person?.phone || "");

    async function save (){
        const data = { firstName, lastName, email, phone};

        if(person) {
            await updatePerson(person.id, data);
        } else{
            await createPerson(data);
        }
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {person ? "Editar Pessoa" : "Nova Pessoa"}
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput 
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />

            <TextInput 
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput 
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity style={styles.btnSave} onPress={save}>
                <Text style={styles.buttonText}>SALVAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
        </View>
    );

}