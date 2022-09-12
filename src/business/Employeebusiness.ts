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

        const arrayEmail = email.split('@')

        if (arrayEmail.length != 2){
            throw new Error ("Email inválido.")
        }

        const arrayPhone = phone.split(')')

        if (arrayPhone.length != 2 || phone.length < 12 || phone.length > 13 || phone.indexOf('(') != 0 || phone.indexOf(')') != 3 || arrayPhone[1].length > 9 || arrayPhone[1].length < 8 || arrayPhone[1].replace(/(^[0-9]+$)/, '').length != 0){
            throw new Error ("Telefone inválido.")
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

    async update (id: string, name: string | undefined, document: string | undefined, email: string | undefined, phone: string | undefined, birthDate: string | undefined, salary: number | undefined): Promise <void> {
        const employeeDB = new EmployeeData()

        const oldEmploy = await employeeDB.getById(id)

        const newEmployee = new Employee(id, name || oldEmploy.getName(), document || oldEmploy.getDocument(), email || oldEmploy.getEmail(), phone || oldEmploy.getPhone(), birthDate || oldEmploy.getBirthDate(), salary || oldEmploy.getSalary(), oldEmploy.getCreatedAt())

        if (!cpf.isValid(newEmployee.getDocument())){
            throw new Error ("CPF inválido.")
        }

        const arrayEmail = newEmployee.getEmail().split('@')

        if (arrayEmail.length != 2){
            throw new Error ("Email inválido.")
        }

        const arrayPhone = newEmployee.getPhone().split(')')

        if (arrayPhone.length != 2 || newEmployee.getPhone().length < 12 || newEmployee.getPhone().length > 13 || newEmployee.getPhone().indexOf('(') != 0 || newEmployee.getPhone().indexOf(')') != 3 || arrayPhone[1].length > 9 || arrayPhone[1].length < 8 || arrayPhone[1].replace(/(^[0-9]+$)/, '').length != 0){
            throw new Error ("Telefone inválido.")
        }

        await employeeDB.update(newEmployee)
    }

    async delete (id: string): Promise<void> {
        await new EmployeeData().delete(id)
    }
}