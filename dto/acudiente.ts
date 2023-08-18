import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Acudiente{
    @Expose({name:'acu_codigo'})
    @IsDefined({message: 'El dato "acu_codigo" es de tipo Obligatorio'})
    @IsInt({message:'El dato "acu_codigo" debe ser de tipo number'})
    acu_codigo: number;

    @Expose({name:'acu_nombre'})
    @IsDefined({message: 'El dato "acu_nombre" es de tipo Obligatorio'})
    @IsString({message:'El dato "acu_nombre" debe ser de tipo string'})
    acu_nombre: string;

    @Expose({name:'acu_telefono'})
    @IsDefined({message: 'El dato "acu_telefono" es de tipo Obligatorio'})
    @IsString({message:'El dato "acu_telefono" debe ser de tipo string'})
    acu_telefono: string;

    @Expose({name:'acu_direccion'})
    @IsDefined({message: 'El dato "acu_direccion" es de tipo Obligatorio'})
    @IsString({message:'El dato "acu_direccion" debe ser de tipo string'})
    acu_direccion: string;


    constructor(data: Partial<Acudiente>){
        Object.assign(this, data);
        this.acu_codigo = 0,
        this.acu_nombre = "",
        this.acu_telefono = "",
        this.acu_direccion = ""
    }
}