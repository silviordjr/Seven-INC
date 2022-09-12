import { Request, Response } from "express";
import EmployeeBusiness from "../business/Employeebusiness";

export default class EmployeeController {
    async get (req: Request, res: Response): Promise <void> {
        try {
            const page = Number(req.query.page) || 0

            const employees = await new EmployeeBusiness().get(page)

            res.status(200).send(employees)
        } catch (error: any) {
            console.log(error.message || error.sqlmessage)
        }
    }

    async getById (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id

            const employee = await new EmployeeBusiness().getbyId(id)

            res.status(200).send(employee) 
        } catch (error: any) {
            console.log(error.message || error.sqlmessage)
        }
    }
}