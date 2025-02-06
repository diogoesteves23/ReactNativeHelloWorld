import { StyleSheet, View, Image } from 'react-native';

const Header =() => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Image style={styles.imageStyle}
                        source={require('../assets/logo.png')}
                />
                <Image style={styles.menu}
                        source={require('../assets/menu.png')}
                />
            </View>
        </View>
    )
}

const  styles = StyleSheet.create({
    container: {
        paddingTop: 5
    },
    headerRow: {
        flexDirection: 'row'
    },
    imageStyle: {
        height: 100,
        width: '50%',
    },
    menu: {
        alignSelf: 'center',
        marginLeft: 150
    }
});


export default Header;