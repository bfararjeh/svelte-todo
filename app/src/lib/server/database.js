// @ts-nocheck
import pool from "./connect.js"

export async function pushTodo(description) {
    const id = crypto.randomUUID();
    await pool.query(
        "INSERT INTO todos(id, description, complete) VALUES( $1, $2, $3 )",
        [id, description, false]
    );
}

export async function deleteTodo(id) {
    try {
        await pool.query(
            "DELETE FROM todos WHERE id = $1",
            [id]
        );
    } catch ({ name, message}) {
        console.log(name);
        console.log(message);
    }
}

export async function completeTodo(id) {
    await pool.query(
        "UPDATE todos SET complete = true WHERE id = $1",
        [id]
    );
}

export async function getTodo(id) {
    if (id) {
        const result = await pool.query(
            "SELECT * FROM todos WHERE id = $1",
            [id]
        );
        return result.rows;
    } else {
        const result = await pool.query("SELECT * FROM todos");
        return result.rows;
    }
}

export async function editTodo(id, newDesc) {
    await pool.query(
        "UPDATE todos SET description = $2 WHERE id = $1",
        [id, newDesc]
    );
}