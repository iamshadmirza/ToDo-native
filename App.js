import React from 'react';
import {Navigator} from 'react-native-deprecated-custom-component';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';
export default class App extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state= store.getState();
    console.log(this.state);
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  onAddStarted(){
    this.nav.push({
      name: 'taskform',
    });
  }
  onAdd(task){
    store.dispatch({
      type: 'ADD_TODO',
      payload: task
    });
    this.nav.pop();
  }
  onCancel(){
    this.nav.pop();
  }
  onDone(todo){
    store.dispatch({
      type: 'DONE_TODO',
      todo
    });
  }
  renderScene(route, nav){
    switch(route.name){
      case 'taskform': 
        return <TaskForm onAdd={this.onAdd.bind(this)} onCancel={this.onCancel.bind(this)} />
      default:
        return (
          <TaskList 
            onAddStarted={this.onAddStarted.bind(this)}
            onDone={this.onDone.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }
  configureScene(){
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  render() {
    return (
      <Navigator 
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', inbox:0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}
