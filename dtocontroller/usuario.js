var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsString, IsInt } from 'class-validator';
export class Usuario {
    constructor(data) {
        Object.assign(this, data);
        this.usu_id = 0,
            this.usu_nombre = "",
            this.usu_segdo_nombre = "",
            this.usu_primer_apellido_usuar = "",
            this.usu_segdo_apellido_usuar = "",
            this.usu_telefono = "",
            this.usu_direccion = "",
            this.usu_email = "",
            this.usu_tipodoc = 0,
            this.usu_genero = 0,
            this.usu_acudiente = 0;
    }
}
__decorate([
    Expose({ name: 'usu_id' }),
    IsDefined({ message: 'El dato "usu_id" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "usu_id" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_id", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsDefined({ message: 'El dato "usu_nombre es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_nombre" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    IsDefined({ message: 'El dato "usu_segdo_nombre es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_segdo_nombre" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido_usuar' }),
    IsDefined({ message: 'El dato "usu_primer_apellido_usuar es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_primer_apellido_usuar" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_primer_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_segdo_apellido_usuar' }),
    IsDefined({ message: 'El dato "usu_segdo_apellido_usuar es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_segdo_apellido_usuar" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_segdo_apellido_usuar", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    IsDefined({ message: 'El dato "usu_telefono" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_telefono" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    IsDefined({ message: 'El dato "usu_direccion" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_direccion" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    IsDefined({ message: 'El dato "usu_email" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "usu_email" debe ser de tipo string' }),
    __metadata("design:type", String)
], Usuario.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    IsDefined({ message: 'El dato "usu_tipodoc" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "usu_tipodoc" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    IsDefined({ message: 'El dato "usu_genero" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "usu_genero" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'usu_acudiente' }),
    IsDefined({ message: 'El dato "usu_acudiente" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "usu_acudiente" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Usuario.prototype, "usu_acudiente", void 0);
