import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                <Ionicons name={props.titleIcon} style={styles.titleIcon} />
                {props.title}
            </Text>
            <Text style={styles.content}>{props.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        backgroundColor: Colors.bodyColorCard,
        borderRadius: 40,
    },
    title: {
        color: Colors.tintColor,
        fontSize: 30,
        fontWeight: 500,
    },
    titleIcon: {
        fontSize: 28,
        marginRight: 5,
    },
    content: {
        color: Colors.textColor,
        fontSize: 20,
        textAlign: 'justify',
        marginTop: 20,
    }
});