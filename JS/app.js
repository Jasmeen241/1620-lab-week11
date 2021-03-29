var toddo = {
    "toddo": "submit web tech lab" , status: "complete",
    "toddo": "work on sql project", status: "incomplete",
    "toddo": "work on 1515 labs" , status:"complete",
     "toddo":"work on maths assignment" , status:"incomplete"
 }

 var toddo = [
    {
        toddo:  "submit web tech lab",
        status: 'complete'
    },
    {
        toddo: "work on sql project" ,
        status: 'started'
    },
    {
        todo:  "work on 1515 labs" ,
        status: 'started'
    },
    {
        todo: "work on maths assignment"  ,
        status: 'started'
    }
];

var completed = [];

for (var todo of toddo) {
    if (todo.status == "complete") {
        completedTodos.push(todo)
    }
}

