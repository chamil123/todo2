

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: null,
      tasks: [],
      c_tasks: [],
    }
  }
  addTask = () => {
  

    fetch('http://localhost:8000/addtodo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "X-CSRFToken": this.state.csrfToken,
      },
      body: JSON.stringify({
        "task": this.state.task,

      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        "POST Response",
          "Response Body -> " + JSON.stringify(responseData)
      })
      .done();
    // this.input._root.clear();
    // Keyboard.dismiss();

  };
  render() {
    return (
      <View>
        <TextInput placeholder="enter task" style={{ width: 200, margin: 10 }} onChangeText={input => this.setState({ input })}></TextInput>

        <Button title="Add" block light onPress={() => this.addTask()} style={{ marginLeft: 30, marginRight: 30 }}>

        </Button>
      </View>



    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
