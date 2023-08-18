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
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';
export class Cita {
    constructor(data) {
        Object.assign(this, data);
        this.cit_codigo = 0,
            this.cit_fecha = new Date(),
            this.estado_cita = 0,
            this.cit_medico = 0,
            this.cit_datosUsuario = 0;
    }
}
__decorate([
    Expose({ name: 'cit_codigo' }),
    IsDefined({ message: 'El dato "cit_codigo" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "cit_codigo" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_codigo", void 0);
__decorate([
    Expose({ name: 'cit_fecha' }),
    IsDefined({ message: 'El dato "cit_fecha" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "cit_fecha" debe ser de tipo date' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "cit_fecha" has an invalid format' }),
    __metadata("design:type", Date)
], Cita.prototype, "cit_fecha", void 0);
__decorate([
    Expose({ name: 'estado_cita' }),
    IsDefined({ message: 'El dato "estado_cita" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "estado_cita" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Cita.prototype, "estado_cita", void 0);
__decorate([
    Expose({ name: 'cit_medico' }),
    IsDefined({ message: 'El dato "cit_medico" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "cit_medico" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_medico", void 0);
__decorate([
    Expose({ name: 'cit_datosUsuario' }),
    IsDefined({ message: 'El dato "cit_datosUsuario" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "cit_datosUsuario" debe ser de tipo number' }),
    __metadata("design:type", Number)
], Cita.prototype, "cit_datosUsuario", void 0);
