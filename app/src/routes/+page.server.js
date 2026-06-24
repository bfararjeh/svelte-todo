// @ts-nocheck
import * as db from "$lib/server/database.js"

export function load() {
	return {
		todos: db.getTodo()
	};
}

export const actions = {
	createTodo: async ({ request }) => {
		const data = await request.formData();
		await new Promise(r => setTimeout(r, 300)); // to avoid jank
        db.pushTodo(data.get("description"));
	},
	
	deleteTodo: async ({ request }) => {
		const data = await request.formData();
		await new Promise(r => setTimeout(r, 300));
        db.deleteTodo(data.get("id"));
	},
	
	completeTodo: async ({ request }) => {
		const data = await request.formData();
		await new Promise(r => setTimeout(r, 300));
        db.completeTodo(data.get("id"));
	},
	
	editTodo: async ({ request }) => {
		const data = await request.formData();
		await new Promise(r => setTimeout(r, 300));
        db.editTodo(data.get("id"), data.get("description"));
	},

}