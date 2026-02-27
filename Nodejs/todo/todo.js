const fs = require("fs")
const filePath = "./tasks.json"

const command = process.argv[2]
const argument = process.argv[3]

const loadTasks = () =>{
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJson = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJson);
};

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({task});
    saveTasks(tasks)
    console.log("Task added ", task);
}   

const listTasks = () =>{
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`))
};

if(command === "add"){
    addTask(argument);
} else if(command === "list"){
    listTasks();
} else if(command === "remove"){
    removeTask(parseInt(argument));
} else{
    console.log("command not found");
}