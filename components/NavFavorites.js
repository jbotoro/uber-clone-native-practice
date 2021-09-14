import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice';

const data = [
    {
        id:'123',
        icon:'home',
        location: 'Home',
        destination: "Telegraph Avenue, Oakland, CA, USA"
    },
    {
        id:'456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Salesforce Tower, San Francisco, CA, USA'
    }
]


const NavFavorites = () => {

    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    return (
        <FlatList 
            data={data} 
            keyExtractor={(item) => item.id} 
            ItemSeparatorComponent={() => (
                <View style={[tw `bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={ ({item: {destination, location, icon}}) => (
                <TouchableOpacity 
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color='white'
                        size={18}
                    />
                    <View>
                        <Text style={tw `font-semibold text-lg`}>{location}</Text>
                        <Text style={tw `text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}/
        >
    )
}

export default NavFavorites

const styles = StyleSheet.create({})
