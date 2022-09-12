export class Employee {
    constructor(
        protected id: string,
        protected name: string,
        protected document: string,
        protected email: string,
        protected phone: string,
        protected birthDate: string,
        protected salary: number,
        protected createdAt: string
    ){}

    getId () {return this.id}
    getName () {return this.name}
    getDocument () {return this.document}
    getEmail () {return this.email}
    getPhone () {return this.phone}
    getBirthDate () {return this.birthDate}
    getSalary () {return this.salary}
    getCreatedAt () {return this.createdAt}
}