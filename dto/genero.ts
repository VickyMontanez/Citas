import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Genero{
    @Expose({name:'gen_id'})
    @IsDefined({message: 'El dato "gen_id" es de tipo Obligatorio'})
    @IsInt({message:'El dato "gen_id" debe ser de tipo number'})
    gen_id: number;

    @Expose({name:'gen_nombre'})
    @IsDefined({message: 'El dato "gen_nombre" es de tipo Obligatorio'})
    @IsString({message:'El dato "gen_nombre" debe ser de tipo string'})
    gen_nombre: string;

    @Expose({name:'gen_abreviatura'})
    @IsDefined({message: 'El dato "gen_abreviatura" es de tipo Obligatorio'})
    @IsString({message:'El dato "gen_abreviatura" debe ser de tipo string'})
    gen_abreviatura: string;

    constructor(data: Partial<Genero>){
        Object.assign(this, data);
        this.gen_id = 0,
        this.gen_nombre = "",
        this.gen_abreviatura = ""
    }
}