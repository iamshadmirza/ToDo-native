import { View, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
export default function render(baseStyle) {
    const localStyle = StyleSheet.create({
        row: {
            marginBottom: 0,
            marginHorizontal: 0,
        },
        container: {
            marginBottom: 20
        }
    });
    const button = [
        {
            text: 'Done',
            backgroundColor: '#05A5D1',
            underlayColor: '#273539',
            onPress: this.onDonePressed.bind(this),
        },
    ];
    return (
        <View style={localStyle.container}>
            <Swipeout
                backgroundColor='#fff'
                right={buttons}
            >
                <View style={[baseStyle.row, localStyle.row]}>
                    <Text style={baseStyle.text}>{this.props.todo.task}</Text>
                </View>
            </Swipeout>
        </View>

    );
}