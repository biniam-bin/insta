import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'


export default function Stories() {
    return (
        <View style={{marginBottom: 13}}>
            <ScrollView horizontal>
                {
                    USERS.map((user, index) => {
                        return(
                            <View key={index} style={{justifyContent: "center", alignItems: "center"}}>
                                <Image style={styles.story} source={{uri: user.image}}/>
                                <Text style={{color: "white"}}>{user.user.length > 11 ? user.user.slice(0, 10).toLowerCase() + "..." : user.user}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    story: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
    }
})