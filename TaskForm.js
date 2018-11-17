import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

export default class TaskForm extends React.Component{
    constructor(props, context){
        super(props, context);      
    }

    onChange(text){
        this.task = text;
    }
    onAddPressed(){
        this.props.onAdd(this.task);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    onChangeText={this.onChange.bind(this)}
                    style={styles.input}
                />

                <TouchableHighlight style={styles.button} onPress={this.onAddPressed.bind(this)}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.button, styles.cancel]} onPress={this.props.onCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
            
        );
    }
}
TaskForm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#f7f7f7',
    },
    input: {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff'
    },
    button:{
        alignSelf: 'stretch',
        height: 45,
        backgroundColor: '#05a5d1',
        marginTop: 10 ,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancel: {
        backgroundColor: '#666'
    }
});