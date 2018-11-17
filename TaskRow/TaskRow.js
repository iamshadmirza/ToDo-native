import React from 'react';
import { StyleSheet,} from 'react-native';
import PropTypes from 'prop-types';
import Render from './Render';

class TaskRow extends React.Component{
    onDonePressed(){
        this.props.onDone(this.props.todo);
    }
    render(){
        return Render.bind(this)(styles);
    }
    

}
TaskRow.propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,
    onDone: PropTypes.func.isRequired,
};

const styles=StyleSheet.create({
    row: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginHorizontal: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5,

    }
});

export default TaskRow;