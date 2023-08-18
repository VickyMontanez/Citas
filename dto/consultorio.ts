import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Consultorio{
    @Expose({name:'cons_codigo'})
    @IsDefined({message: 'El dato "cons_codigo" es de tipo Obligatorio'})
    @IsInt({message:'El dato "cons_codigo" debe ser de tipo number'})
    cons_codigo: number;

    @Expose({name:'cons_nombre'})
    @IsDefined({message: 'El dato "cons_nombre" es de tipo Obligatorio'})
    @IsString({message:'El dato "cons_nombre" debe ser de tipo string'})
    cons_nombre: string;

    constructor(data: Partial<Consultorio>){
        Object.assign(this, data);
        this.cons_codigo = 0,
        this.cons_nombre = ""
    }
}