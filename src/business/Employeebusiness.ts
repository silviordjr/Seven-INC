import EmployeeData from "../data/EmployeeData";
import { Employee } from "../models/Employee";

export default class EmployeeBusiness {
    async get(page:number): Promise <Employee []> {
        const employees = await new EmployeeData().get(page)
        
        return employees
    }

    async getbyId (id: string): Promise<Employee> {
        const employee = await new EmployeeData().getById(id)

        return employee
    }
}