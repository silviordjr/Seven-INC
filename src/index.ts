import app from "./app";
import EmployeeController from "./controller/EmployeeController";

const employeeController = new EmployeeController()

app.get('/employee', employeeController.get)
app.get('/employee/:id', employeeController.getById)

app.post('/employee', employeeController.create)

app.put('/employee/:id', employeeController.update)

app.delete('/employee/:id', employeeController.delete)