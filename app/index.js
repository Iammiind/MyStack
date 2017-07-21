import React, { Component } from 'react'
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native'
import styles from './styles'

class MyStack extends Component {

    key = 0
    state = {
        text: '',
        textList: []
    }

    _validation() {
        if(this.state.text != '') {
            this._pushList()
        }
        else {
            alert(' Please input your text ! ')
        }
    }

    _clear() {
        this.setState({
            text: ''
        })
    }

    _addText(value) {
        this.setState({
            text: value
        })
    }
    _pushList() {
        this.setState({
            textList: [...this.state.textList, this.state.text]
        }, () => this._clear() )
    }

    keyObject = 0
    _keyExtractor = (item, key) => this.keyObject++;
    

    _popList() {
        if(this.state.textList.length > 0) {
            Alert.alert(
                'Pop',
                'Are you sure to "pop" a list ?',
                [
                    {text: 'Pop', onPress: () => this.setState({
                        textList: [...this.state.textList.slice(0, this.state.textList.length - 1)]
                    })},
                    {text: 'Cancel', cancelable: true}
                ]
            )
        }
        else {
            Alert.alert(
                'Warning',
                'No lists to pop !'
            )
        }
    }

    render() {
        return(
            <View style={ styles.container }>
                {/* input part */}
                <View style={ styles.inputWrapper }>
                    <TextInput style={ styles.textInput } 
                                placeholder="Please input your text ." 
                                onChangeText={ (value) => this._addText(value) }
                                value={ this.state.text }
                    />
                    <View style={ styles.buttonWrapper }>
                        <View style={ styles.button }>
                            <Button  title="Push" onPress={() => this._validation() } />
                        </View>
                        <View style={ styles.button }>
                            <Button  title="Pop" onPress={() => this._popList() } />
                        </View>
                    </View>
                </View>
                {/* list part */}
                <View style={ styles.listWrapper }>
                    <Text>
                        The List of a text.
                    </Text>
                    <FlatList
                        data={ this.state.textList }
                        renderItem={({item}) => 
                            <View style={ styles.list }>
                                <Text style={ styles.text }>
                                    {item}
                                </Text>
                            </View>
                        }
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        )
    }
}
export default MyStack

