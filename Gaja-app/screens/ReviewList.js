import React, {useEffect,useState} from 'react'
import { Image, StyleSheet,FlatList, Text, View,TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import {database} from '../firebase';
import * as firebase from "firebase";
import {auth} from '../firebase';

const ReviewList = () => {

    const [data, setData]=useState('');
    const navigation=useNavigation();
    const [id] = useState(auth.currentUser.email.split('@')[0]);

    function delreviewlist(key){
        database
        .ref(`리뷰목록/${id}/` +key)
        .set(null);
        alert('삭제되었습니다.')
      }

      useEffect(()=>{
        var changeDataRef = firebase.database().ref('리뷰목록/' + id).orderByChild("regdate")
        changeDataRef.on("value",(snapshot)=>{
          const tmp=[];
          snapshot.forEach((child)=> {
            tmp.unshift({
              key:child.key,
              title:child.val().title,
              contents:child.val().contents,
              pass:child.val().pass,
              regdate:child.val().regdate,
              rating: child.val().rating
            })
          });
          setData(tmp);
        })
      },[])
      //source={{ uri:image ? image:null}}
      // 데이터 불러오기 펑션

      const renderItem = ({item}) => {
        return (
          <View>
            {/* <Image style={{ width:60,height:60}}/> */}
            <Text style={{ padding: 17 }}>
              {item.title}  {item.regdate}
            </Text>
            <Text style={styles.review}>{item.contents}</Text>
            <View style={{ flexDirection: "row", marginLeft: 11 }}>
              <View style={{
                  width: "15%",
                  borderWidth: 2,
                  borderRadius: 10,
                  height: "80%",
                  marginTop: "2.5%",
                  backgroundColor: 'black'
                }}><Text style={styles.text2}>{item.rating}점</Text></View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  delreviewlist(item.key)
                }
              >
                <Text style={styles.text}>삭제</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setData();
                  navigation.navigate("UpdateReview", item.key);
                }}
              >
                <Text style={styles.text}>수정</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }

    return (
      <View style={tw`bg-white h-full`}>
        <View style={{padding: 5, left:'33%'}}>
          <Image
            style={{
            width: 100,
            height: 100,
            resizeMode: 'contain'
            }}
            source={require('../screens/gaja.png')}
          />
        </View>
        <TouchableOpacity style={tw`bg-black absolute top-16 left-4 p-3 mt-2 
                  rounded-full`}
          onPress={() => { navigation.navigate('HomeScreen') }}
        >
          <AntDesign name="home" size={20} color="white" />
        </TouchableOpacity>
        <View style={tw`border-t border-gray-200 flex-shrink mt-5`}/>
        <View style={{ marginTop:'5%' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Review")}>
            <Text style={styles.text}>새글작성</Text>
          </TouchableOpacity>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
    )
}

export default ReviewList

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 8,
        width:'20%',
        backgroundColor: 'black',
        borderRadius:10,
        marginTop:10,
        marginLeft:5,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft: '25%',
        marginTop: '12%'
      },
      review:{
        padding:5,
        fontSize: 20,
        borderWidth:1,
        borderRadius:10,
        width:"90%",
        marginLeft:'4%',
      }
})
