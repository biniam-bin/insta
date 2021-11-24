import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {Divider} from "react-native-elements";

export const botomTabIcons = [
    {
        name: "Home",
        active: "https://img.icons8.com/ios/2x/ffffff/home.png",
        inactive: "https://img.icons8.com/ios-filled/2x/ffffff/home.png"
    },
    {
        name: "Search",
        active: "https://img.icons8.com/ios-filled/2x/ffffff/search.png",
        inactive: "https://img.icons8.com/ios/2x/ffffff/search.png"
    },
    {
        name: "Reels",
        active: "https://img.icons8.com/ios-filled/2x/ffffff/instagram-reel.png",
        inactive: "https://img.icons8.com/ios/2x/ffffff/instagram-reel.png"
    },
    {
        name: "Shop",
        active: "https://img.icons8.com/ios-glyphs/2x/ffffff/shopping-bag-full.png",
        inactive: "https://img.icons8.com/windows/2x/ffffff/shopping-bag-full.png"
    },
]

export default function BottomTabs({icons}) {
    const [activeTab, setActiveTab] = useState("Home")

    const Icon = ({icon}) => {
        return(
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image source={{uri: icon.inactive}} style={styles.icon}/>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            {icons.map((icon, index) => {
                return(
                    <Icon key={index} icon={icon}/>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    },
    container: {
        flexDirection: "row"
    }
})