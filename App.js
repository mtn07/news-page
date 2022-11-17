import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import BottomTab from "./BottomTab";

export default function App() {

  return (
    <View style={styles.view}>
      <View style={styles.genericSystemBar}>
        <View style={styles.borderBottomView} />
        <Image
          style={styles.triangleIcon}
          resizeMode="cover"
          source={require('./assets/triangle.png')}
        />
        <View style={styles.squareView} />
        <Image
          style={styles.circleIcon}
          resizeMode="cover"
          source={require('./assets/circle.png')}
        />
        <Text style={styles.wiredText}>
          <Text style={styles.wireText}>wire</Text>
          <Text style={styles.dText}>d</Text>
        </Text>
      </View>
      <View style={styles.genericSystemBar1}>
        <View style={styles.borderBottomView1} />
        <Image
          style={styles.triangleIcon1}
          resizeMode="cover"
          source={require('./assets/triangle.png')}
        />
        <View style={styles.squareView1} />
        <Image
          style={styles.circleIcon1}
          resizeMode="cover"
          source={require('./assets/circle.png')}
        />
        <Text style={styles.wiredText1}>
          <Text style={styles.wireText1}>wire</Text>
          <Text style={styles.dText1}>d</Text>
        </Text>
      </View>
      <Pressable
        style={styles.iconAndroid24Chevron}
        onPress={() => navigation.navigate("Screen10")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('./assets/icon--android--24--chevronleft.png')}
        />
      </Pressable>
      <Text style={styles.text}>ข่าวสาร</Text>
      <View style={styles.card1View}>
        <View style={styles.rectangleView} />
        <Text style={styles.text1}>
          ทำไม ทั่วโลกต้องใช้สารเคมีกำจัดศัตรูพืช
        </Text>
        <Text style={styles.text4}>
          <Text
            style={styles.text2}
          >{`มีรายงานว่า จำนวนศัตรูพืชทั่วโลกที่ทำความเสียหายต่อผลผลิตพืชมีจำนวนมากถึง 63,000 ชนิด ได้แก่ แมลงและไรศัตรูพืช 9,000 ชนิด โรคพืช 50,000 ชนิด และวัชพืช 8,000 ชนิด หากไม่มีการใช้สารเคมีกำจัดศัตรูพืช `}</Text>
          <Text style={styles.text3}>อ่านต่อ...</Text>
        </Text>
        <Image
          style={styles.insecticidekdje8a03lk1Icon}
          resizeMode="cover"
          source={require('./assets/insecticidekdje8a03lk-1.png')}
        />
      </View>
      <View style={styles.card1View1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.text7}>
          <Text style={styles.text5}>{`โรค-แมลงศัตรูพืช `}</Text>
          <Text style={styles.text6}>ฤดูแล้ง</Text>
        </Text>
        <Text style={styles.text11}>
          <Text style={styles.text10}>
            <Text
              style={styles.text8}
            >{`แนะเกษตรกรให้เฝ้าระวังโรคและแมลงศัตรูพืชในช่วงฤดูแล้ง `}</Text>
            <Text style={styles.text9}>อ่านต่อ...</Text>
          </Text>
        </Text>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require('./assets/-12.png')}
        />
      </View>
      <View style={styles.card1View2}>
        <View style={styles.rectangleView2} />
        <Text style={styles.text12}>ศัตรูพืชช่วงหน้าร้อน</Text>
        <Text style={styles.text15}>
          <Text
            style={styles.text13}
          >{`เกษตรกรผู้ปลูกพืชในภาคต่างๆ ควรมีการเฝ้าระวังศัตรูพืชสำคัญต่างๆ ที่จะเข้าทำลายผลผลิต... `}</Text>
          <Text style={styles.text14}>อ่านต่อ...</Text>
        </Text>
        <Image
          style={styles.a57f0587c164c77854598d38dff6e9Icon}
          resizeMode="cover"
          source={require('./assets/2a57f0587c164c77854598d38dff6e98-1.png')}
        />
      </View>
      <Image
        style={styles.download1Icon}
        resizeMode="cover"
        source={require('./assets/download-1.png')}
      />
      <View style={styles.card1View3}>
        <View style={styles.rectangleView3} />
        <Text style={styles.pembayaranBulananText}>Pembayaran bulanan</Text>
        <Text style={styles.pilihanPembayaranFleksibelB}>
          Pilihan pembayaran fleksibel bulanan adalah layanan yang te..
        </Text>
        <Image
          style={styles.download2Icon}
          resizeMode="cover"
          source={require('./assets/download-2.png')}
        />
      </View>
      <View style={styles.containerView}>
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("Screen11")}
        >
          <Image
            style={styles.home7FillIcon}
            resizeMode="cover"
            source={require('./assets/home7fill.png')}
          />
          <Text style={styles.text16}>หน้าแรก</Text>
        </Pressable>
        <View style={styles.iconFillbookmarkView} />
        <Image
          style={styles.iconFillsetting}
          resizeMode="cover"
          source={require('./assets/iconfillsetting1.png')}
        />
         <Text style={styles.text17}>ตั้งค่า</Text>
            <Pressable
              style={styles.groupPressable1}
              onPress={() => navigation.navigate("Screen8")}
            >
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("./assets/vector.png")}
              />
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("./assets/vector1.png")}
              />
              <Image
                style={styles.vectorIcon2}
                resizeMode="cover"
                source={require("./assets/vector2.png")}
              />
              <Text style={styles.text18}>ที่บันทึกไว้</Text>
        </Pressable>
      </View>
      <View style={styles.groupView1}>
        <Pressable
          style={styles.groupPressable2}
          onPress={() => navigation.navigate("GooglePixel2XL3")}
        >
          <View style={styles.groupView}>
            <Image
              style={styles.search24Icon}
              resizeMode="cover"
              source={require('./assets/search24.png')}
            />
            <View style={styles.rectangleView4} />
            <Text style={styles.text19}>ค้นหาข่าว</Text>
          </View>
        </Pressable>
        <Text style={styles.text20}>ค้นหาข่าว</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderBottomView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#020202",
    height: 1,
  },
  triangleIcon: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    right: 7.88,
    borderRadius: 0.5,
    width: 12.24,
    height: 10.53,
  },
  squareView: {
    position: "absolute",
    marginTop: "5%",
    top: "50%",
    right: 43.5,
    borderRadius: 0.5,
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 1,
    width: 11,
    height: 11,
  },
  circleIcon: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    right: 25.5,
    width: 11,
    height: 11,
  },
  wireText: {
    color: "#020202",
  },
  dText: {
    color: "#757575",
  },
  wiredText: {
    position: "absolute",
    top: 3,
    left: 6,
    fontSize: 12,
    fontFamily: "Kalam",
    textAlign: "center",
  },
  genericSystemBar: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 24,
    overflow: "hidden",
  },
  borderBottomView1: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#020202",
    height: 1,
  },
  triangleIcon1: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    right: 7.88,
    borderRadius: 0.5,
    width: 12.24,
    height: 10.53,
  },
  squareView1: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    right: 43.5,
    borderRadius: 0.5,
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 1,
    width: 11,
    height: 11,
  },
  circleIcon1: {
    position: "absolute",
    marginTop: -5.5,
    top: "50%",
    right: 25.5,
    width: 11,
    height: 11,
  },
  wireText1: {
    color: "#020202",
  },
  dText1: {
    color: "#757575",
  },
  wiredText1: {
    position: "absolute",
    top: 3,
    left: 6,
    fontSize: 12,
    fontFamily: "Kalam",
    textAlign: "center",
  },
  genericSystemBar1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 411,
    height: 24,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAndroid24Chevron: {
    position: "absolute",
    left: "0%",
    top: "4.5%",
    right: "86.62%",
    bottom: "88.82%",
    width: "13.38%",
    height: "6.68%",
  },
  text: {
    position: "absolute",
    top: 37,
    left: 55,
    fontSize: 36,
    letterSpacing: 0.5,
    fontFamily: "Space Mono",
    color: "#313333",
    textAlign: "left",
    width: 150,
    height: 59,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 349,
    height: 211,
  },
  text1: {
    position: "absolute",
    top: 144,
    right: 9,
    fontSize: 20,
    letterSpacing: 0.3,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#313333",
    textAlign: "left",
    width: 331,
    height: 19,
  },
  text2: {
    color: "#515252",
  },
  text3: {
    color: "#0047ff",
  },
  text4: {
    position: "absolute",
    top: 168,
    right: 8.9,
    fontSize: 10,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    textAlign: "left",
    width: 331.1,
    height: 28.29,
  },
  insecticidekdje8a03lk1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 8,
    width: 349,
    height: 133,
  },
  card1View: {
    position: "absolute",
    top: 210,
    right: 33,
    width: 349,
    height: 211,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 156,
    height: 179,
  },
  text5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text6: {
    margin: 0,
  },
  text7: {
    position: "absolute",
    top: 118,
    right: 31,
    fontSize: 16,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#313333",
    textAlign: "left",
  },
  text8: {
    color: "#515252",
  },
  text9: {
    color: "#0047ff",
  },
  text10: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text11: {
    position: "absolute",
    top: 154,
    right: 4,
    fontSize: 10,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    textAlign: "left",
    width: 148,
  },
  icon1: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    width: 156,
    height: 114,
  },
  card1View1: {
    position: "absolute",
    top: 447,
    right: 223,
    width: 156,
    height: 190,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 156,
    height: 179,
  },
  text12: {
    position: "absolute",
    top: 122,
    right: 21,
    fontSize: 16,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#313333",
    textAlign: "left",
  },
  text13: {
    color: "#515252",
  },
  text14: {
    color: "#0047ff",
  },
  text15: {
    position: "absolute",
    top: 141,
    right: 3,
    fontSize: 10,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    textAlign: "left",
    width: 148,
  },
  a57f0587c164c77854598d38dff6e9Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    width: 156,
    height: 114,
  },
  card1View2: {
    position: "absolute",
    top: 447,
    right: 31,
    width: 156,
    height: 179,
  },
  download1Icon: {
    position: "absolute",
    top: 669,
    right: 219,
    borderRadius: 8,
    width: 160,
    height: 106,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 156,
    height: 179,
  },
  pembayaranBulananText: {
    position: "absolute",
    top: 122,
    right: 16,
    fontSize: 14,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#313333",
    textAlign: "left",
  },
  pilihanPembayaranFleksibelB: {
    position: "absolute",
    top: 146,
    right: 4,
    fontSize: 10,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    color: "#515252",
    textAlign: "left",
    width: 148,
  },
  download2Icon: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 8,
    width: 156,
    height: 61,
  },
  card1View3: {
    position: "absolute",
    top: 669,
    right: 27,
    width: 156,
    height: 179,
  },
  home7FillIcon: {
    position: "absolute",
    height: "54.39%",
    width: "46.97%",
    top: "0%",
    right: "25.76%",
    bottom: "45.61%",
    left: "27.27%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text16: {
    position: "absolute",
    height: "38.6%",
    width: "100%",
    top: "61.4%",
    left: "0%",
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  groupPressable: {
    position: "absolute",
    height: "57%",
    width: "16.06%",
    top: "22.77%",
    right: "75.67%",
    bottom: "20.23%",
    left: "8.27%",
  },
  iconFillbookmarkView: {
    position: "absolute",
    height: "32%",
    width: "7.79%",
    top: "20.79%",
    right: "46.47%",
    bottom: "47.21%",
    left: "45.74%",
    overflow: "hidden",
  },
  iconFillsetting: {
    position: "absolute",
    height: "32%",
    width: "7.79%",
    top: "20.79%",
    right: "13.63%",
    bottom: "47.21%",
    left: "78.59%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text17: {
    position: "absolute",
    height: "22%",
    width: "10.95%",
    top: "57.43%",
    left: "77.13%",
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "38.98%",
    width: "29.49%",
    top: "48.8%",
    right: "-176.92%",
    bottom: "12.22%",
    left: "247.44%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "54.24%",
    width: "41.03%",
    top: "35.24%",
    right: "-182.05%",
    bottom: "10.52%",
    left: "241.03%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorIcon2: {
    position: "absolute",
    height: "40.68%",
    width: "23.93%",
    top: "6.78%",
    right: "39.32%",
    bottom: "52.54%",
    left: "36.75%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text18: {
    position: "absolute",
    height: "37.29%",
    width: "100%",
    top: "62.71%",
    left: "0%",
    fontSize: 20,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  groupPressable1: {
    position: "absolute",
    height: "59%",
    width: "18.98%",
    top: "20.79%",
    right: "40.63%",
    bottom: "20.21%",
    left: "40.39%",
  },
  containerView: {
    position: "absolute",
    top: 722,
    left: 0,
    backgroundColor: "#f1f1f1",
    width: 411,
    height: 101,
    overflow: "hidden",
  },
  search24Icon: {
    position: "absolute",
    height: "37.29%",
    width: "6.61%",
    top: "33.9%",
    right: "88.89%",
    bottom: "28.81%",
    left: "4.5%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#e4e4e4",
    borderWidth: 1,
  },
  text19: {
    position: "absolute",
    height: "32.2%",
    width: "57.96%",
    top: "38.98%",
    left: "14.11%",
    fontSize: 24,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    color: "#8f9090",
    textAlign: "left",
    display: "none",
  },
  groupView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupPressable2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  text20: {
    position: "absolute",
    height: "32.2%",
    width: "33.72%",
    top: "25.42%",
    left: "12.97%",
    fontSize: 24,
    letterSpacing: 0.1,
    fontFamily: "Roboto",
    color: "#8f9090",
    textAlign: "left",
  },
  groupView1: {
    position: "absolute",
    top: 111,
    left: 32,
    width: 347,
    height: 59,
  },
  view: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 823,
    overflow: "hidden",
  },
});
