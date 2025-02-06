import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';

const Footer = () => {
    const [emailText, setEmailText] = useState('Enter email Address');
    
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.updates}>EmailUpdates</Text>
                <Text style={styles.offers}>Information about stock</Text>
                <TextInput
                    style = {styles.footerInput}
                    onChangeText={text=> setEmailText(text)}
                    value={emailText}
                />
                <TouchableOpacity style={style.footerButton}>
                    <Text style={styles.footerButtonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.support}>Customer Support</Text>
                <Text style={styles.supportOptions}>Contact US</Text>
                <Text style={styles.supportOptions}>ORDER TRACKER</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.support}>CompanyInfo</Text>
                <Text style={styles.supportOptions}>ABOUT</Text>
                <Text style={styles.supportOptions}>FOLLOW US</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#686868',
        height: 190,
        paddingLeft: 50,
        paddingTop: 30,
        marginTop: 12
    },
    updates:{
        fontFamily:'OpenSans-Regular',
        fontSize: 15,
        color: '#000000',
        paddingBottom: 5
    },
    offers:{
        fontFamily:'OpenSans-Italic',
        fontSize: 12,
        color: '#000000',
        paddingBottom: 10
    },
    footerInput:{
        borderWidth: 1,
        width: 175,
        height: 40,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        fontFamily:'OpenSans-Ligth'
    },
    footerButton:{
        width: '40%',
        marginTop: 10,
        backgroundColor: '#000000',
        borderRadius: 5
    },
    footerButtonText:{
        fontSize: 20,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    support:{
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        marginBottom: 10
    },
    supportOptions:{
        fontFamily:'OpenSans-Regular',
        fontSize: 12,
        color: '#FFFFFF',
        paddingBottom: 3
    }
});


export default Footer;
