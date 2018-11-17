import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow/TaskRow';

class TaskList extends React.Component{
    constructor(props, context){
        super(props, context);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state ={
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    componentWillReceiveProps(nextProps){
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
        this.setState({dataSource});
    }

    renderRow(todo){
        return (
            <TaskRow 
                todo={todo}
                onDone={this.props.onDone}
            />
        );
    }

    render(){
        return(
            <View style={styles.container} >
                <ListView
                    key={this.props.todos}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                <TouchableHighlight style={styles.button} onPress={this.props.onAddStarted}>
                    <Text style={styles.buttonText}>Add one</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

TaskList.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddStarted: PropTypes.func.isRequired,
};

const styles=StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: '#f7f7f7',
        flex: 1 ,
        justifyContent: 'flex-start' 
    },
    button: {
        backgroundColor: '#333',
        height: 60,
        borderWidth: 2,
        borderColor: '#05a5d1',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fafafa',
        fontSize: 18,
        fontWeight: '500'
    }
});

export default TaskList;