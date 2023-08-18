import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Cita{
    @Expose({name:'cit_codigo'})
    @IsDefined({message: 'El dato "cit_codigo" es de tipo Obligatorio'})
    @IsInt({message:'El dato "cit_codigo" debe ser de tipo number'})
    cit_codigo: number;

    @Expose({name:'cit_fecha'})
    @IsDefined({message: 'El dato "cit_fecha" es de tipo Obligatorio'})
    @IsString({message:'El dato "cit_fecha" debe ser de tipo date'})
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "cit_fecha" has an invalid format' })
    cit_fecha: Date;

    @Expose({name:'estado_cita'})
    @IsDefined({message: 'El dato "estado_cita" es de tipo Obligatorio'})
    @IsString({message:'El dato "estado_cita" debe ser de tipo number'})
    estado_cita: number;

    @Expose({name:'cit_medico'})
    @IsDefined({message: 'El dato "cit_medico" es de tipo Obligatorio'})
    @IsString({message:'El dato "cit_medico" debe ser de tipo number'})
    cit_medico: number;

    @Expose({name:'cit_datosUsuario'})
    @IsDefined({message: 'El dato "cit_datosUsuario" es de tipo Obligatorio'})
    @IsString({message:'El dato "cit_datosUsuario" debe ser de tipo number'})
    cit_datosUsuario: number;

    constructor(data: Partial<Cita>){
        Object.assign(this, data);
        this.cit_codigo = 0,
        this.cit_fecha = new Date(),
        this.estado_cita = 0,
        this.cit_medico = 0,
        this.cit_datosUsuario = 0
    }
}