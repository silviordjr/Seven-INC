import { Request, Response } from "express";
import EmployeeBusiness from "../business/Employeebusiness";

export default class EmployeeController {
    async create (req:Request, res: Response): Promise<void> {
        try {
            const {name, document, email, phone, birthDate, salary} = req.body

            await new EmployeeBusiness().create(name, document, email, phone, birthDate, salary)

            res.status(200).send({message: "Empregado cadaastrado!"})
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async get (req: Request, res: Response): Promise <void> {
        try {
            const page = Number(req.query.page) || 1;

            const employees = await new EmployeeBusiness().get(page)

            res.status(200).send(employees)
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async getById (req: Request, res: Response): Promise <void> {
        try {
            const id = req.params.id

            const employee = await new EmployeeBusiness().getbyId(id)

            res.status(200).send(employee) 
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async update (req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const {name, document, email, phone, birthDate, salary} = req.body

            await new EmployeeBusiness().update(id, name, document, email, phone, birthDate, salary)

            res.status(200).send({message: "Atualização concluída."})   
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async delete (req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            await new EmployeeBusiness().delete(id)

            res.status(200).send({message: "Empregado deletado."})        
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}