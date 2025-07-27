import {useState, useEffect, use} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import useStorage, {} from '../../hooks/useStorage'
import { getImageAsync } from 'expo-clipboard';
import { PasswordItem } from './components/passwordItem';
export function Password(){
    const [listPassword, setListPassword] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage()

    useEffect(() => {
        async function loadPassword(){
            const passwords = await getItem("@pass")
            console.log(passwords)
            setListPassword(passwords);


        }
        loadPassword();
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPassword(passwords)
    }
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senha</Text>
            </View>
            <View style={styles.content}>
        <FlatList
        style={{flex:1,paddingTop: 14}}
        data={listPassword}
        keyExtractor={(item) => String(item)}
        renderItem={({item}) => <PasswordItem
        data={item} removePassword={() => handleDeletePassword(item)} />}
        />
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
header:{
    backgroundColor: "#392DE9",
    paddingTop: 40,
    paddingLeft: 14,
    paddingRight: 14
    
},
title:{
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold"
},
content:{
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,

}

    
})