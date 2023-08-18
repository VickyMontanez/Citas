import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Usuario{
    @Expose({name:'usu_id'})
    @IsDefined({message: 'El dato "usu_id" es de tipo Obligatorio'})
    @IsInt({message:'El dato "usu_id" debe ser de tipo number'})
    usu_id: number;

    @Expose({name:'usu_nombre'})
    @IsDefined({message: 'El dato "usu_nombre es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_nombre" debe ser de tipo string'})
    usu_nombre: string;

    @Expose({name:'usu_segdo_nombre'})
    @IsDefined({message: 'El dato "usu_segdo_nombre es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_segdo_nombre" debe ser de tipo string'})
    usu_segdo_nombre: string;

    @Expose({name:'usu_primer_apellido_usuar'})
    @IsDefined({message: 'El dato "usu_primer_apellido_usuar es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_primer_apellido_usuar" debe ser de tipo string'})
    usu_primer_apellido_usuar: string;

    @Expose({name:'usu_segdo_apellido_usuar'})
    @IsDefined({message: 'El dato "usu_segdo_apellido_usuar es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_segdo_apellido_usuar" debe ser de tipo string'})
    usu_segdo_apellido_usuar: string;

    @Expose({name:'usu_telefono'})
    @IsDefined({message: 'El dato "usu_telefono" es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_telefono" debe ser de tipo string'})
    usu_telefono: string;

    @Expose({name:'usu_direccion'})
    @IsDefined({message: 'El dato "usu_direccion" es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_direccion" debe ser de tipo string'})
    usu_direccion: string;

    @Expose({name:'usu_email'})
    @IsDefined({message: 'El dato "usu_email" es de tipo Obligatorio'})
    @IsString({message:'El dato "usu_email" debe ser de tipo string'})
    usu_email: string;

    @Expose({name:'usu_tipodoc'})
    @IsDefined({message: 'El dato "usu_tipodoc" es de tipo Obligatorio'})
    @IsInt({message:'El dato "usu_tipodoc" debe ser de tipo number'})
    usu_tipodoc: number;

    @Expose({name:'usu_genero'})
    @IsDefined({message: 'El dato "usu_genero" es de tipo Obligatorio'})
    @IsInt({message:'El dato "usu_genero" debe ser de tipo number'})
    usu_genero: number;

    @Expose({name:'usu_acudiente'})
    @IsDefined({message: 'El dato "usu_acudiente" es de tipo Obligatorio'})
    @IsInt({message:'El dato "usu_acudiente" debe ser de tipo number'})
    usu_acudiente: number;

    constructor(data: Partial<Usuario>){
        Object.assign(this, data);
        this.usu_id = 0,
        this.usu_nombre = "",
        this.usu_segdo_nombre = "",
        this.usu_primer_apellido_usuar= "",
        this.usu_segdo_apellido_usuar = "",
        this.usu_telefono = "",
        this.usu_direccion= "",
        this.usu_email = "",
        this.usu_tipodoc = 0,
        this.usu_genero = 0,
        this.usu_acudiente = 0
    }
}