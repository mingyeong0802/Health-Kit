import React from 'react';
import {ScrollView, View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import logo from './../assets/logo.png';

export default function Main({navigation, route}) {
  return (
    <ScrollView style={styles.container}>
      <Image source={logo} style={styles.imageStyle} />
      <View style={styles.iconContainer}>
        <Ionicons name="notifications" size={32} color="gray" style={styles.icon} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Mypage');
          }}
        >
          <Ionicons name="settings" size={32} color="gray" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.shootBox}>
          <Text style={styles.textBox}>먹고싶은 상품의 {'\n'}상세정보를 촬영해주세요</Text>
          <View style={styles.shooticonContainer}>
            <Ionicons name="camera" size={56} color="#96ba8d" style={styles.shooticon} />
          </View>
        </View>
        <View style={styles.BoxContainer}>
          <View style={styles.menuBox}>
            <Text style={styles.textBox}>개인 맞춤 식단</Text>
            <View style={styles.menuiconContainer}>
              <MaterialCommunityIcons
                name="food"
                size={52}
                color="#9ab7d6"
                style={styles.menuicon}
              />
            </View>
          </View>
          <View style={styles.adviceBox}>
            <Text style={styles.textBox}>상담하러 가기</Text>
            <View style={styles.adviceiconContainer}>
              <Ionicons name="person" size={48} color="#d6c5de" style={styles.personIcon} />
              <MaterialCommunityIcons
                name="chat"
                size={20}
                color="#d6c5de"
                style={styles.bubbleIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: 50,
    width: 100,
    alignSelf: 'left',
    top: 40,
    left: 15,
    marginBottom: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: 55,
    right: 10,
    flexDirection: 'row',
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  shootBox: {
    width: '90%',
    height: 180,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  BoxContainer: {
    flexDirection: 'row',
  },
  menuBox: {
    width: '42.5%',
    height: 190,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  adviceBox: {
    width: '42.5%',
    height: 190,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textBox: {
    top: 20,
    left: 15,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24, // 줄 높이 조절
  },
  shooticonContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    shadowColor: '#769e6c',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  menuiconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    shadowColor: '#6c8aab',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  adviceiconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    shadowColor: '#a681b8',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  bubbleIcon: {
    position: 'absolute', // 절대 위치 설정
    bottom: 40,
    left: 35, // 사람 아이콘의 가운데에 위치하도록 조절
  },
});