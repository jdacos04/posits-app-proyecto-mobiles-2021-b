import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { saveTask, getTask, updateTask } from "../../api";
import Layout from "../Components/Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';


const TaskFormScreen = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: "",
    des: "",
    idp: ""
  });
  const [editing, setEditing] = useState(false);

  // if (route && route.params) {
  //   navigation.setOptions({ headerTitle: "Updating Task" });
  // }

  useEffect(() => {
    help()
   
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Actualizar" });
      (async () => {
        
        const task = await getTask(route.params.id);
        console.log(task)
        setTask({ title: task.title, des: task.des, dip:task.idp});
      })();
    }
  }, []);

  const handleSubmit = async () => {
    try {

      if (!editing) {
        await saveTask(task);
      } else {
        console.log(route.params.id_notas, task)
        await updateTask(route.params.id_notas, {...task});
      }
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (name, value) => setTask({ ...task, [name]: value });
    const help =async()=>{
      const marcos=await AsyncStorage.getItem('user_id')
      console.log(parseInt(marcos))
      handleChange("idp", marcos)
      
    }
  

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        placeholderTextColor="#000000"
        value={task.title}
        onChangeText={(text) => handleChange("title", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Descripcion"
        placeholderTextColor="#000000"
        value={task.des}
        onChangeText={(text) => handleChange("des",text)}
      />

      {!editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Guardar </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Actualizar</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#a4e547",
    height: 30,
    color: "#000000",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#a4e547",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
  },
});

export default TaskFormScreen;
