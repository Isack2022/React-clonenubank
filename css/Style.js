import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen:{
        flex:1,
        width:'100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        flex: 1.2,
        backgroundColor: '#820ad1',
        width: '100%',
    },
    headerIcons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        paddingLeft: 20,
    },
    headerUser:{
        backgroundColor: '#9e29e7',
        borderRadius: 25,
        padding: 10,
        marginTop: 60,
    },
    headerRight:{
        flexDirection:'row',
        gap: 19,
        paddingTop: 70,
    },
    headerEye:{
        paddingTop: '-20',
    },
    txtUser:{
        fontSize: 20,
        color: '#fff',
        margin: 15,
        marginTop: 40,
    },
    money:{

    },
    account:{
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    accountLine:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 25,
    },
    txtAccount:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }, 
    txtValue:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    nav:{
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        marginLeft: 20,
    },
    navItemIcon:{
        backgroundColor: '#efefef',
        borderRadius: 100,
        padding: 13,
        width: 60,
    },  
    navItem:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        marginTop: 10,
    },
    navImage:{
        width: 25,
        height: 25,
        position: 'relative',
        marginLeft: 1,
    },
    card:{
        flex: 1,
        backgroundColor: '#fff',
    },
    message:{
        flex:1,
        backgroundColor: '#fff',
    },
    footer:{

    },

    // Margem de 20px e 30px para todos os lados
    margin20:{
        margin: 20,
    },
    margin30:{
        margin: 30,
    },
})