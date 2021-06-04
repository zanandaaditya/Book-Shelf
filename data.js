const STORAGE_KEY = "BOOK_LIST";

let bookTemp = [];

 function isStorageExist() /* boolean */ {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    } 
    return true;
}

function saveData() {
    const parsed /* string */ = JSON.stringify(bookTemp);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}

function loadDataFromStorage() {
    const serializedData /* string */ = localStorage.getItem(STORAGE_KEY);
    
    let data = JSON.parse(serializedData);
    
    if(data !== null)
        bookTemp = data;

    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
    if(isStorageExist())
        saveData();
}

function composeTodoObject(title, author, year, isCompleted) {
   return {
       id: +new Date(),
       title,
       author,
       year,
       isCompleted
   };
}

function findTodo(todoId) {

    for(todo of bookTemp){
        if(todo.id === todoId)
            return todo;
    }

    return null;
}

function findTodoIndex(todoId) {
    
    let index = 0
    for (todo of bookTemp) {
        if(todo.id === todoId)
            return index;

        index++;
    }

    return -1;
}