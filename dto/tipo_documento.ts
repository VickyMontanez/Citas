import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class TipoDocumento{
    @Expose({name:'tipodoc_id'})
    @IsDefined({message: 'El dato "tipodoc_id" es de tipo Obligatorio'})
    @IsInt({message:'El dato "tipodoc_id" debe ser de tipo number'})
    tipodoc_id: number;

    @Expose({name:'tipodoc_nombre'})
    @IsDefined({message: 'El dato "tipodoc_nombre es de tipo Obligatorio'})
    @IsString({message:'El dato "tipodoc_nombre" debe ser de tipo string'})
    tipodoc_nombre: string;

    @Expose({name:'tipodoc_abreviatura'})
    @IsDefined({message: 'El dato "tipodoc_abreviatura" es de tipo Obligatorio'})
    @IsString({message:'El dato "tipodoc_abreviatura" debe ser de tipo string'})
    tipodoc_abreviatura: string;

    constructor(data: Partial<TipoDocumento>){
        Object.assign(this, data);
        this.tipodoc_id = 0,
        this.tipodoc_nombre = "",
        this.tipodoc_abreviatura = ""
    }
}