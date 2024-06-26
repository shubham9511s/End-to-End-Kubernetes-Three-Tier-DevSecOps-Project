import axios from "axios";
const apiUrl = "http://k8s-threetie-mainlb-1dd958d0ec-352335056.eu-north-1.elb.amazonaws.com/api/tasks" //"http://localhost:8080/api/tasks";
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
