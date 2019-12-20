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

export function CardPoem(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.paras.map((para =>
                <View style={styles.poemPara}>
                    {para.paraLines.map((line =>
                        <Text style={styles.poemParaLine}>{line}</Text>
                    ))}
                </View>
            ))}
            <Text style={styles.poemAuthor}>
                - Hasil Paudyal
            </Text>
        </View>
    );
}

export function CardQuote(props) {
    return (
        <View style={styles.card}>
            {props.content.map((line =>
                <Text style={styles.contentQuote}>{line}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        backgroundColor: Colors.bodyColorCard,
        borderRadius: 15,
    },
    title: {
        color: Colors.tintColor,
        fontSize: 30,
        fontWeight: 'bold',
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
    },
    contentQuote: {
        color: Colors.textColor,
        fontSize: 20,
    },
    poemPara: {
        textAlign: 'center',
        marginTop: 20,
    },
    poemParaLine: {
        color: Colors.textColor,
        fontSize: 20,
    },
    poemAuthor: {
        textAlign: "right",
        fontSize: 15,
        color: Colors.textColor,
    }
});