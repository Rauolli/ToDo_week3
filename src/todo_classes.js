// ---- Test Test Test Test --------

// test-Array mit 10 Todo-Objects
const toDoArr = [
    new ToDo(new TodoDate("2022-08-17"), new TodoTime("09:15"), "Standup", "1"),
    new ToDo(new TodoDate("2022-08-18"), new TodoTime("08:15"), "Coding", "2"),
    new ToDo(new TodoDate("2022-08-19"), new TodoTime("07:15"), "Chillin", "3"),
    new ToDo(new TodoDate("2022-08-20"), new TodoTime("06:15"), "Sleepin", "4"),
    new ToDo(new TodoDate("2022-08-16"), new TodoTime("18:15"), "Eating", "5"),
    new ToDo(new TodoDate("2022-08-16"), new TodoTime("09:15"), "Standup", "6"),
    new ToDo(new TodoDate("2022-08-13"), new TodoTime("18:15"), "Good Morning", "7"),
    new ToDo(new TodoDate("2022-08-12"), new TodoTime("19:15"), "Bush my teeth", "8"),
    new ToDo(new TodoDate("2022-08-16"), new TodoTime("20:15"), "Washing", "9"),
    new ToDo(new TodoDate("2022-08-15"), new TodoTime("21:15"), "Eating again", "10")
]


// toDoArr.updateActiveList();
// toDoArr.updateFineshedList();


/* toDoArr.forEach(todo => console.log(`
                                     Aufgabe: ${todo.task}
                                     Datum: ${todo.date}
                                     Zeit: ${todo.time}
                                     Kommentar: ${todo.comment}`));*/

let toDoListe = new TodoList();
for (const todo of toDoArr) {
    toDoListe.add(todo);   
}

//toDoListe.setTodoToFineshed(toDoArr[6]);
//toDoListe.setTodoToFineshed(toDoArr[7]);
//toDoListe.setTodoToFineshed(toDoArr[9]);


console.log("++++ Gesamte ToDo-Liste +++++")
console.log(toDoListe.allToString());
console.log("++++ Aktive ToDo-Liste +++++")
console.log(toDoListe.activeListToString());
console.log("++++ Erledigte ToDo-Liste +++++")
console.log(toDoListe.finishedListToString());


// export { TodoDate, TodoTime, ToDo, TodoApp};