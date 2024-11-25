import React, { useState } from 'react';
import { datasource } from './Data';
import { TextInput, View, Text, Button,Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key); // Initialize 'letter' with the passed parameter
    const [type, setType] = useState('Vowels'); // ghh   // Initialize 'type' with a default value or fetched value

    return (
        <View style={{ padding: 10 }}>

            {/* LETTER INPUT */}

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
                <TextInput
                    value={letter}
                    maxLength={1}
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>




            {/* BUTTONS */}
            <View style={{ padding: 10,flexDirection: 'row', justifyContent: 'space-between' }}>

                {/* SAVE BUTTON */}
                <View style={{flex:1, margin: 10}}>
                    <Button title="SAVE"
                            onPress={() => {
                                let indexNum=1
                                if (route.params.type == 'Vowels') {
                                    indexNum = 0
                                }
                                datasource[indexNum].data[route.params.index].key = letter;
                                navigation.navigate('Home');
                            }}/>
                </View>

                {/* DELETE BUTTON */}
                <View style={{flex:1, margin: 10}}>
                    <Button title="DELETE"
                            onPress={() => {
                                let indexNum=1
                                if (route.params.type == 'Vowels') {
                                    indexNum = 0
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text:'Yes', onPress: () => {
                                        datasource[indexNum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                        }},
                                        {text: 'No'}])
                            }}
                    />
                </View>

            </View>




        </View>
    );
};

export default Edit;
