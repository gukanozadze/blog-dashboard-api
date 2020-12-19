"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.create = function (_a) {
        var email = _a.email, password = _a.password;
        // Prevent creating user with same email
        console.log('his.users.find(user => user.email === email)', this.users.find(function (user) { return user.email === email; }));
        if (this.users.find(function (user) { return user.email === email; })) {
            throw new common_1.ForbiddenException('User is created with this email');
        }
        var newUser = {
            id: uuid_1.v4(),
            email: email,
            password: password
        };
        this.users.push(newUser);
        return newUser;
    };
    UserService.prototype.login = function (user) {
        var logedInUser = this.users.find(function (_a) {
            var email = _a.email, password = _a.password;
            return email === user.email && password === user.password;
        });
        console.log('logedInUser', logedInUser);
        if (logedInUser) {
            return logedInUser;
        }
        else {
            throw new common_1.NotFoundException('Email or password is Incorrect');
        }
    };
    UserService = __decorate([
        common_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
