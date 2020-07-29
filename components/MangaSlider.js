import React, { Component, useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Modal from './Modal'

const MangaSlider = (props) => {

    const [isLoading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState([])
    const [text, setTextInput] = useState('')
    const [filterArray, setFilterArray] = useState([])

    //Function CallModal
    const [showModal, setModal] = useState(false)


    const [itemObject, setItemObject] = useState({
        showImage: '',
        animTitle: '',
        canonicalTitle: '',
        type: '',
        showType: '',
        startDate: '',
        endDate: '',
        average: '',
        rating: '',
        subtype: '',
        status: '',
        episodecount: '',
        episodeLength: '',
        totalLength: '',
        favoritesCount: '',
        descriptionItem: ''

    })


    const closeModal = () => {
        setModal(false)
        // setItemObject({
        //     ...itemObject,
        //     openModal:false
        // })
    }

    const Url = 'https://kitsu.io/api/edge/manga'

    async function fetchUrl() {

        await fetch(Url)
            .then((response) => response.json())
            .then((dataJson) => {
                setLoading(false)
                setDataSource(dataJson.data)
                setFilterArray(dataJson.data)
            });

    }

    useEffect(() => {
        fetchUrl();
        console.log('DataJsonAnime:', dataSource)
        console.log('InitModal', itemObject.openModal)
    }, []);

    const SearchFilterFunction = (text) => {
        const newData = filterArray.filter(function (item) {
            const itemData = item.attributes.slug ? item.attributes.slug.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setDataSource(newData)
        setTextInput(text)
    }

    const gotoAnime = () => {
        return props.navigation.navigate('Anime')
     }

    return (
        //ListView to show with textinput used as search bar
        <View style={styles.viewStyle}>
            {
                isLoading
                    ?
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <ActivityIndicator />
                    </View>
                    :
                    <View>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={text => SearchFilterFunction(text)}
                            value={text}
                            underlineColorAndroid="transparent"
                            placeholder="Search here manga stories!"
                        />
                        <ScrollView horizontal >
                            {
                                dataSource.map((item, i) => {
                                    return (
                                        <TouchableOpacity
                                            key={i}
                                            value={item}
                                            onPress={() => {
                                                setItemObject({
                                                    ...itemObject,
                                                    showImage: item.attributes.posterImage.small,
                                                    animTitle: item.attributes.slug,
                                                    canonicalTitle: item.attributes.canonicalTitle,
                                                    type: item.attributes.titles.ja_jp,
                                                    showType: item.attributes.showType,
                                                    startDate: item.attributes.startDate,
                                                    endDate: item.attributes.endDate,
                                                    average: item.attributes.averageRating,
                                                    rating: item.attributes.ageRatingGuide,
                                                    subtype: item.attributes.subtype,
                                                    status: item.attributes.status,
                                                    episodecount: item.attributes.episodeCount,
                                                    episodeLength: item.attributes.episodeLength,
                                                    totalLength: item.attributes.totalLength,
                                                    favoritesCount: item.attributes.favoritesCount,
                                                    descriptionItem: item.attributes.synopsis
                                                }),
                                                    setModal(true)

                                            }}
                                        >
                                            <View style={{ padding: 3 }}>
                                                <Image source={{ uri: item.attributes.posterImage.small }} style={{ width: 100, height: 150, }} />
                                                <Text style={{ width: 100, height: 30, backgroundColor: '#e67e22', textAlign: 'center', padding: 5 }}>{item.attributes.canonicalTitle}</Text>
                                            </View>
                                        </TouchableOpacity>
                                         
                                    )
                                })
                            }
                        </ScrollView>
                        {
                            showModal
                                ?
                                <Modal
                                    ImageUrl={itemObject.showImage}
                                    AnimeTitle={itemObject.animTitle}
                                    canonicalTitle={itemObject.canonicalTitle}
                                    Type={itemObject.type}
                                    ShowType={itemObject.showType}
                                    StartDate={itemObject.startDate}
                                    EndDate={itemObject.endDate}
                                    AverageRating={itemObject.average}
                                    Rating={itemObject.rating}
                                    subtype={itemObject.subtype}
                                    status={itemObject.status}
                                    episodeCount={itemObject.episodecount}
                                    episodeLength={itemObject.episodeLength}
                                    totalLength={itemObject.totalLength}
                                    favoritesCount={itemObject.favoritesCount}
                                    description={itemObject.descriptionItem}
                                    close={closeModal}
                                />
                                :
                                null
                        }
                    </View>
            }
            <TouchableOpacity style = {{backgroundColor:'#f1c40f'}} onPress={gotoAnime}>
                <Text style={{padding:10, textAlign:'center'}}>Go to Manga search</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        marginTop: 40,
        padding: 16,
        backgroundColor:'#2c3e50'
    },
    textStyle: {
        padding: 10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default MangaSlider