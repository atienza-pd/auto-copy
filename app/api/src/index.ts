import express from 'express';
import bodyParser from 'body-parser';
import { Todo } from 'types';
import listCopyEntryRoutes from './copy-path/listCopyPathRoutes'
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/copy-path', listCopyEntryRoutes);

// let todos: Todo[] = [
//   { id: 1, title: 'Todo 1', completed: false },
//   { id: 2, title: 'Todo 2', completed: true },
//   { id: 3, title: 'Todo 3', completed: false }
// ];

// app.get('/todos', (req, res) => {
//   res.json(todos);
// });

// app.post('/todos', (req, res) => {
//   const todo: Todo = req.body;
//   todo.id = todos.length + 1;
//   todos.push(todo);
//   res.status(201).json(todo);
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
