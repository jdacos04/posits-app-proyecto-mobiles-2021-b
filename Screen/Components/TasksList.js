import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Alert, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import moduleName from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteTask, getTasks,getData} from "../../api";
import TaskItem from "./TaskItem";

const TasksList = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();

  
  const getUsers = async () => {
    try {
      const marcos=await AsyncStorage.getItem('user_id')
      console.log(parseInt(marcos))
      const tasks = await getTasks(parseInt(marcos));
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
    await getUsers();
    setRefreshing(false);
  }, []);

  const handleDelete = (id_notas) => {
    Alert.alert("Borrar", "esta seguro?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: async () => {
          await deleteTask(id_notas);
          await getUsers();
        },
      },
    ]);
  };

  useEffect(() => {
   getUsers();
    console.log("called");
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <TaskItem task={item} handleDelete={handleDelete} />
  );

  return (
    <SafeAreaView style={{ flex: 1, width: "90%" }}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => toString(item.id_notas)}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff9a00"]}
            progressBackgroundColor="#a4e547"
          />
        }
      />
    </SafeAreaView>
  );
};

export default TasksList;
