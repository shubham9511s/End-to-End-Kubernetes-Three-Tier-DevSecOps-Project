import axios from "axios";
const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://13.49.183.102:5000/api/tasks" //"http://localhost:8080/api/tasks";
console.log(apiUrl)
export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}