const API = 'https://api-berserk.herokuapp.com/notes';
//'https://api-berserk.herokuapp.com/notes'
//"http://192.168.1.108:4000/notes"
const p="persona"
export const deleteTask = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};





export const getTasks = async (id) => {

  const res = await fetch(`${API}/${p}/${id}`, {
    method: "GET",
  });

   const a = await res.json();
   console.log(a)
   return a
};

export const saveTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};

export const getTask = async (taskId) => {
  const res = await fetch(`${API}/${taskId}`);
  const b =await res.json();
  console.log(b)
  return b
};

export const updateTask = async (taskId, newTask) => {
  console.log(taskId, newTask)
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return res;
};
