import React from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet, Animated } from 'react-native';
export default function render(baseStyle) {
    const doneAnimation = new Animated.ValueXY();
    function animatedPress(){
        Animated.spring(doneAnimation, {
            tension: 2,
            friction: 3,
            toValue: {
                x: -500,
                y: 0
            }
        }).start();
        setTimeout(() => {
            this.onDonePressed();
        }, 1000)
        
    }
    const localStyle = StyleSheet.create({
        doneButton: {
            padding: 5,
            borderRadius: 5
        },
        image: {
            height: 35,
            width: 35
        },
        row: {
            transform: doneAnimation.getTranslateTransform(),
        }
    });
    return (
        <Animated.View style={[baseStyle.row, localStyle.row]}>
            <Text style={baseStyle.text}>{this.props.todo.task}</Text>
            <TouchableHighlight style={[baseStyle.doneButton, localStyle.doneButton]} 
                underlayColor="#ddd"
                onPress={animatedPress.bind(this)}>
                <Image style={localStyle.image} source={require('../images/checked.png')} />
            </TouchableHighlight>
        </Animated.View>
    );
}