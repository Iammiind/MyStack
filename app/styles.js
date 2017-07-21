import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECEFF1'
    },
    inputWrapper: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 70
    },
    textInput: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        backgroundColor: '#FAFAFA'
    },
    buttonWrapper: {
        flexDirection: 'row',
        width: 300
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#BDBDBD',
        backgroundColor: '#FAFAFA'  
    },
    listWrapper: {
        flex: 5,
        width: 300
    } ,
    list: {
        borderWidth: 1,
        borderColor: '#BDBDBD',
        height: 30,
        backgroundColor: '#FAFAFA' 
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
})