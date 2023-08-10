import { StatusBar } from 'expo-status-bar';
import {  Image,Text, View } from 'react-native';
import {styles} from './css/Style';
import { AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
         <View style={styles.headerIcons}>
           <View style={styles.headerUser}>
             <AntDesign name="user" size={25} color="#fff" />
           </View>
           <View style={styles.headerRight}>
             <Ionicons name="md-eye-outline" size={29.5} color="#fff" style={styles.headerEye} />
             <AntDesign name="questioncircleo" size={25} color="#fff" />
             <MaterialCommunityIcons name="email-plus-outline" size={25} color="#fff" />
           </View>
         </View>
        <Text style={styles.txtUser}>Olá, Isack</Text>
      </View>

      <View style={styles.account}>
        <View style={styles.accountLine}>
          <Text style={styles.txtAccount}>Conta</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="black" />
        </View>
        <Text style={styles.txtValue}>US$ 25.146,43</Text>
      </View>

      <View style={styles.nav}>
        <View style={styles.navItemIcon}>
          <Image style={styles.navImage}source={require('./assets/icon/icons8-pix-ios-16-32.png')} />
        </View>
      </View>

      <View style={styles.card}>

      </View>

      <View style={styles.message}>

      </View>

      <View style={styles.accountx}>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
