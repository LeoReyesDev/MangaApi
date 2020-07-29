
import React, { Component, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextComponent,
    Button
} from 'react-native';



const Modal = (props) => {

    const TextDescript = (props) => {
        return (

            <ScrollView style={{
                width: '100%',
                flexDirection: 'column',
                backgroundColor: '#757575',
                height: 'auto',
                padding: 9
            }}>
                <Text>Synopsis</Text>
                <Text style={{ textAlign: "justify", color: '#D3D3D3' }}>
                    {props.scrollDesc}
                </Text>
            </ScrollView>

        )
    }


    return (

        <View style={styles.containerModal}>
            <ScrollView>
                <View style={{ textAlign: 'right' }}>
                    <TouchableOpacity onPress={props.close} style={{ backgroundColor: '#e67e22' }}>
                        <Text style={{ color: '#263238', textAlign:'right', fontSize:15, padding:10, fontWeight:'bold' }}>Close X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#263238' }}>
                    <View style={{ paddingRight: 8 }}>
                        <Image style={{ width: 160, height: 220 }} source={{ uri: props.ImageUrl }}></Image>
                    </View>
                    <View>
                        <Text style={styles.colorText}>Title:{' '}{props.MainTitle}</Text>
                        <Text style={styles.colorText}>Main Title:{' '}{props.AnimeTitle}</Text>
                        <Text style={styles.colorText}>Canonical Title:{' '}{props.CanonicalTitle}</Text>
                        <Text style={styles.colorText}>Type:{' '}{props.Type}</Text>
                        <Text style={styles.colorText}>{props.ShowType}</Text>
                        <Text style={styles.colorText}>Start date: {' '}{props.StartDate}</Text>
                        <Text style={styles.colorText}>End date:{' '}{props.EndDate}</Text>
                        {/* <YouTubePlayer VideoIdPlay={props.VideoIdPlay}/> */}
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#37474F' }}>
                    <View style={{ width: '50%', padding: 5 }}>
                        <Text style={styles.colorText}>Raitings</Text>
                        <View><Text style={styles.colorText2}>Average Raiting: {props.AverageRating}</Text></View>
                        <View><Text style={styles.colorText2}>Raiting:{props.Rating}</Text></View>
                    </View>
                    <View style={{ width: '50%', padding: 5 }}>
                        <Text style={styles.colorText}>Types</Text>
                        <View><Text style={styles.colorText2}>{props.subtype}</Text></View>
                        <View><Text style={styles.colorText2}>{props.status}</Text></View>
                    </View>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#616161' }}>
                    <View style={{ width: '50%', padding: 5 }}>
                        <Text style={styles.colorText}>Episodes</Text>
                        <View><Text style={styles.colorText2}>Episodes count:{props.episodeCount}</Text></View>
                        <View><Text style={styles.colorText2}>Episodes length:{props.episodeLength}</Text></View>
                    </View>
                    <View style={{ width: '50%', padding: 5 }}>
                        <Text style={styles.colorText}>Episodes Total</Text>
                        <View><Text style={styles.colorText2}>Total:{props.totalLength}</Text></View>
                        <View><Text style={styles.colorText2}>Favorites count:{props.favoritesCount}</Text></View>
                    </View>
                </View>
                <TextDescript scrollDesc={props.description} />
            </ScrollView>
            
        </View>

    )

}

const styles = StyleSheet.create({
    containerModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        shadowColor: "#000",
        width: '100%',
        height: 600,
        opacity: 0.80,
        position: 'absolute',
        zIndex: 2
    },
    colorText: {
        color: '#EF6C00',
    },
    colorText2: {
        color: '#cacaca',
    },
});

export default Modal

