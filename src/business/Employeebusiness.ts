import { cpf } from "cpf-cnpj-validator";
import EmployeeData from "../data/EmployeeData";
import { Employee } from "../models/Employee";
import IdGenerator from "../services/idGenerator";

export default class EmployeeBusiness {
    async create (name: string, document: string, email: string, phone: string, birthDate: string, salary: number): Promise<void>{
        if (!cpf.isValid(document)){
            throw new Error ("CPF inválido.")
        }

        const employeeDB = new EmployeeData()
        const usedDocument = await employeeDB.usedDocument(document)

        if (usedDocument){
            throw new Error ("Documento já cadastrado.")
        }

        const id = new IdGenerator().generateId()
        const date = new Date()
        const created_at = date.toISOString().split('T')[0]

        const newEmployee = new Employee(id, name, document, email, phone, birthDate, salary, created_at)

        employeeDB.create(newEmployee)
    }

    async get(page:number): Promise <Employee []> {
        const employees = await new EmployeeData().get(page)
        
        return employees
    }

    async getbyId (id: string): Promise<Employee> {
        const employee = await new EmployeeData().getById(id)

        return employee
    }
}