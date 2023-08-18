import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Especialidad{
    @Expose({name:'esp_id'})
    @IsDefined({message: 'El dato "esp_id" es de tipo Obligatorio'})
    @IsInt({message:'El dato "esp_id" debe ser de tipo number'})
    esp_id: number;

    @Expose({name:'esp_nombre'})
    @IsDefined({message: 'El dato "esp_nombre" es de tipo Obligatorio'})
    @IsString({message:'El dato "esp_nombre" debe ser de tipo string'})
    esp_nombre: string;

    constructor(data: Partial<Especialidad>){
        Object.assign(this, data);
        this.esp_id = 0,
        this.esp_nombre = ""
    }
}