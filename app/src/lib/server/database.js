// @ts-nocheck

const db = new Map();

export function pushTodo(description) {
    const id = crypto.randomUUID();
    db.set(id, { id, description, completed: false });
}

export function deleteTodo(id) {
    try {
        db.delete(id);
    } catch ({ name, message}) {
        console.log(name);
        console.log(message);
    }
}

export function completeTodo(id) {
    const todo = db.get(id);
    if (todo) {
        todo.completed = true;
    }
}

export function getTodo(id) {
    if (id) {
        return db.get(id);
    } else {
        return Array.from(db.values());
    }
}