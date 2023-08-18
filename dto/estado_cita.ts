import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class EstadoCita{
    @Expose({name:'estcita_id'})
    @IsDefined({message: 'El dato "estcita_id" es de tipo Obligatorio'})
    @IsInt({message:'El dato "estcita_id" debe ser de tipo number'})
    estcita_id: number;

    @Expose({name:'estcita_nombre'})
    @IsDefined({message: 'El dato "estcita_nombre" es de tipo Obligatorio'})
    @IsString({message:'El dato "estcita_nombre" debe ser de tipo string'})
    estcita_nombre: string;

    constructor(data: Partial<EstadoCita>){
        Object.assign(this, data);
        this.estcita_id = 0,
        this.estcita_nombre = ""
    }
}