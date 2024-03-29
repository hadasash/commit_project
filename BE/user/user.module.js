"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var user_controller_1 = require("./controller/user.controller");
var user_service_1 = require("./service/user.service");
var user_entity_1 = require("./entity/user.entity");
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forRoot("mongodb+srv://dbUser:kNK8X3X0rrdukBrY@cluster0.mfgyalh.mongodb.net/commit", {}),
                mongoose_1.MongooseModule.forFeature([{ name: user_entity_1.UserEntity.name, schema: user_entity_1.UserSchema }]),
            ],
            controllers: [user_controller_1.UserController],
            providers: [user_service_1.UserService],
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map