import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({ task, handleDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskFormScreen", { id: task.id_notas})}
      >
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={{ color: "#ffffff" }}>{task.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "#ee5253", padding: 7, borderRadius: 5 }}
        onPress={() => handleDelete(task.id_notas)}
      >
        <Text style={{ color: "#fff" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#64438b",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  itemTitle: {
    color: "#000000",
  },
});
export default TaskItem;
