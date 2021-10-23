import React, {useState, useEffect} from 'react';
import { SafeAreaView, Button, Image, StyleSheet, Text} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Firebase from 'firebase';
import { ActivityIndicator } from 'react-native';
import  {firebaseConfig} from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/core";

const InfoScreen = () => {
  if(!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
  }
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  const uploadImage = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
      alert('업로드가 완료되었습니다!');
      navigation.navigate("UserScreen");
    });

    const ref = Firebase.storage().ref().child('/test');
    const snapshot = ref.put(blob);

    snapshot.on(Firebase.storage.TaskEvent.STATE_CHANGED,
    () => {
      setUploading(true);
    },
    (error) => {
      setUploading(false);
      console.log(error);
      blob.close();
      return;
    },
    () => {
      snapshot.snapshot.ref.getDownloadURL().then((url) => {
        setUploading(false);
        blob.close();
        return url;
      })
    }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri:image ? image : null}} style={{width:'100%', height:'40%'}} />
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.text}>
            이미지를 선택해주세요
          </Text>
        </TouchableOpacity>
        {!uploading?  
        <TouchableOpacity style={styles.button} 
        onPress={uploadImage}
        >
          <Text style={styles.text}>
            이미지 업로드
          </Text>
        </TouchableOpacity> : <ActivityIndicator size='large' />}
    </SafeAreaView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:"white",
    alignItems: 'center',
  },
  button: {
    width: 300,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'black',
    borderRadius:8,
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
})