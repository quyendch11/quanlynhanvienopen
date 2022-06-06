export enum Gene {
    MALE,
    FEMALE
}
export class Staff{
    id: number;
    name:string;
    gene:Gene;
    birthday?: Date;
    email: string;
    phone: number;
    constructor(id:number,
        name: string,
        gene:Gene,
        birthday:Date,
        email:string,
        phone: number){
            this.id = id;
            this.name = name;
            this.gene = gene;
            this.birthday = birthday;
            this.email = email;
            this.phone = phone;
        }

}