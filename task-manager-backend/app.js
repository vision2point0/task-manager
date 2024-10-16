// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Endpoints go here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  });
  
  // Add a new task
  app.post('/tasks', async (req, res) => {
    const { description } = req.body;
    if (!description) {
      return res.status(400).json({ error: 'Description is required' });
    }
    const newTask = await prisma.task.create({
      data: { description },
    });
    res.status(201).json(newTask);
  });
  
  // Delete a task by ID
  app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await prisma.task.findUnique({ where: { id: Number(id) } });
  
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
  });
  