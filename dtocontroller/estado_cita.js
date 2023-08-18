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
export class EstadoCita {
    constructor(data) {
        Object.assign(this, data);
        this.estcita_id = 0,
            this.estcita_nombre = "";
    }
}
__decorate([
    Expose({ name: 'estcita_id' }),
    IsDefined({ message: 'El dato "estcita_id" es de tipo Obligatorio' }),
    IsInt({ message: 'El dato "estcita_id" debe ser de tipo number' }),
    __metadata("design:type", Number)
], EstadoCita.prototype, "estcita_id", void 0);
__decorate([
    Expose({ name: 'estcita_nombre' }),
    IsDefined({ message: 'El dato "estcita_nombre" es de tipo Obligatorio' }),
    IsString({ message: 'El dato "estcita_nombre" debe ser de tipo string' }),
    __metadata("design:type", String)
], EstadoCita.prototype, "estcita_nombre", void 0);
