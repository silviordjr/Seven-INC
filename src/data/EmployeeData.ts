import { Employee } from "../models/Employee";
import connection from "./Connection";

export default class EmployeeData {
    async create (employee: Employee): Promise<void> {
        await connection ('employee')
        .insert({
            id: employee.getId(),
            name: employee.getName(),
            document: employee.getDocument(),
            email: employee.getEmail(),
            phone: employee.getPhone(),
            birth_date: employee.getBirthDate(),
            salary: employee.getSalary(),
            created_at: employee.getCreatedAt()
        })
    }

    async get(page: number): Promise<Employee []> {
        const employee = await connection ('employee')
        .limit(10)
        .offset((page - 1) * 10)
        .select('*')

        const employees: Employee [] = []

        employee.forEach((emp) => {
            let newEmployee = new Employee(emp.id, emp.name, emp.document, emp.email, emp.phone, emp.birth_date, emp.salary, emp.created_at )

            employees.push(newEmployee)
        })

        return employees 
    }

    async getById (id: string): Promise <Employee> {
        const employee = await connection ('employee')
        .where('id', id)
        .select('*')

        const newEmployee = new Employee(employee[0].id, employee[0].name, employee[0].document, employee[0].email, employee[0].phone, employee[0].birth_date, employee[0].salary, employee[0].created_at )

        return newEmployee
    }

    async usedDocument (document: string): Promise<boolean> {
        const employee = await connection ('employee')
        .where('document', document)
        .select('*')

        if (employee[0]){
            return true
        } else {
            return false
        }
    }
}