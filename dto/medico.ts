import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Medico{
    @Expose({name:'med_nroMatriculaProsional'})
    @IsDefined({message: 'El dato "med_nroMatriculaProsional" es de tipo Obligatorio'})
    @IsInt({message:'El dato "med_nroMatriculaProsional" debe ser de tipo number'})
    med_nroMatriculaProsional: number;

    @Expose({name:'med_nombreCompleto'})
    @IsDefined({message: 'El dato "med_nombreCompleto" es de tipo Obligatorio'})
    @IsString({message:'El dato "med_nombreCompleto" debe ser de tipo string'})
    med_nombreCompleto: string;

    @Expose({name:'med_consultorio'})
    @IsDefined({message: 'El dato "med_consultorio" es de tipo Obligatorio'})
    @IsInt({message:'El dato "med_consultorio" debe ser de tipo number'})
    med_consultorio: number;

    @Expose({name:'med_especialidad'})
    @IsDefined({message: 'El dato "med_especialidad" es de tipo Obligatorio'})
    @IsInt({message:'El dato "med_especialidad" debe ser de tipo number'})
    med_especialidad: number;


    constructor(data: Partial<Medico>){
        Object.assign(this, data);
        this.med_nroMatriculaProsional = 0,
        this.med_nombreCompleto = "",
        this.med_consultorio = 0,
        this.med_especialidad = 0
    }
}