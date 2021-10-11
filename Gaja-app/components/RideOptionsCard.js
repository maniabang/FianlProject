import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, 
        View, Text, SafeAreaView, 
        TouchableOpacity, FlatList, Image,
        Modal, Animated
    } 
from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from "@react-navigation/core";
import { selectTravelTimeInformation } from '../slices/navSlice';
import Intl from 'intl';
import 'intl/locale-data/jsonp/ja-JP';

const data =[
    {
        id: "Gaja-X-123",
        title: "GajaX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: "Gaja-XL-456",
        title: "Gaja XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: "Gaja-LUX-789",
        title: "Gaja LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE = 0.89;

const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      toggleModal();
    }, [visible]);
  
    const toggleModal = () => {
      if(visible){
        setShowModal(true);
        Animated.spring(scaleValue,{
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }else{
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue:0,
          duration:300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View 
            style={[styles.modalContainer, {transform:[{scale:scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
}; 

const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")} 
                    style={tw`absolute top-3 left-5 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a Ride - {travelTimeInformation?.distance.text}
                </Text>
            </View>

            <FlatList 
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={({item: {id, title, multiplier, image}, item})=>(
                    <TouchableOpacity
                        onPress={() => setSelected(item)} 
                        style={tw`flex-row justify-between items-center px-10 ${
                            id === selected?.id && "bg-gray-200"
                        }`}
                    >
                        <Image 
                            style={{
                                width: 80,
                                height: 80,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat(['ja-JP'], {
                                style: 'currency',
                                currency: 'JPY',
                            }).format(
                                ((travelTimeInformation?.duration?.value * 
                                SURGE_CHARGE_RATE * multiplier) * 20) ? 
                                (travelTimeInformation?.duration?.value * 
                                SURGE_CHARGE_RATE * multiplier) * 20 : 0
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity 
                disabled={!selected} 
                style={tw`bg-black py-5 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <ModalPoup visible={visible}>
                            <View style={{alignItems: 'center'}}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => setVisible(false)}>
                                <Image 
                                    source={require("../assets/x.png")} 
                                    style={{height: 30, width: 30}}/>
                                </TouchableOpacity>
                            </View>
                            </View>
                            <View style={{alignItems:'center'}}>
                            <Image 
                                source={require('../assets/adam.png')} 
                                style={{height:150, width:150, marginVertical: 10}}
                            />
                            </View>
                            <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
                                Hi my name is Adam!{"\n"}Safe your journey
                            </Text>
                        </ModalPoup>
                        <Text 
                            style={tw`text-center text-white text-xl`}
                            onPress={() => setVisible(true)}            
                        >
                            Choose {selected?.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default RideOptionsCard

const styles = StyleSheet.create({
    modalBackGround: {
        flex:1,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        height:'60%',
        width: '80%',
        backgroundColor: 'white', 
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },
      header: {
        width: '100%',
        height:40,
        alignItems: 'flex-end',
        justifyContent: 'center', 
      },
});