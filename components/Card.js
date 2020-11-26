import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
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
            {props.paras.map(((para, index) =>
                <View style={styles.poemPara} key={index}>
                    {para.paraLines.map(((line, index) =>
                        <Text style={styles.poemParaLine} key={index}>{line}</Text>
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
            {props.content.map(((line, index) =>
                <Text style={styles.contentQuote} key={index} >{line}</Text>
            ))}
        </View>
    );
}

export function CardProject(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>
                {props.project.name}
            </Text>
            {props.project.coverImage
            ?
            <Image style={styles.projectCoverImage} source={{ uri: props.project.coverImage }} />
            : null}
            <Text style={styles.content}>{props.project.tagLine}</Text>
            {props.project.details.map(((detail, index) =>
                <View style={styles.content} key={index} >
                    <Text style={styles.projectSubTitle}>
                        {detail.title}
                    </Text>
                    {detail.paragraphs
                    ?
                    detail.paragraphs.map(((para, index) =>
                        <Text style={styles.content} key={index} >{para.text}</Text>
                    ))
                    : null}
                    {detail.lists
                    ?
                    detail.lists.map(((para, index) =>
                        <Text style={styles.projectListItem} key={index} >{index+1}.) {para.text}</Text>
                    ))
                    : null}
                </View>
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
    },
    projectSubTitle: {
        color: Colors.tintColor,
        fontSize: 20,
        fontWeight: 'bold',
    },
    projectListItem: {
        color: Colors.textColor,
        fontSize: 20,
    },
    projectCoverImage: {
        width: Dimensions.get('screen').width * 0.75,
        height: 200,
        alignSelf: "center"
    }
});