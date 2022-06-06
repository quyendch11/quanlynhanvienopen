"use strict";
exports.__esModule = true;
exports.Staff = exports.Gene = void 0;
var Gene;
(function (Gene) {
    Gene[Gene["MALE"] = 0] = "MALE";
    Gene[Gene["FEMALE"] = 1] = "FEMALE";
})(Gene = exports.Gene || (exports.Gene = {}));
var Staff = /** @class */ (function () {
    function Staff(id, name, gene, birthday, email, phone) {
        this.id = id;
        this.name = name;
        this.gene = gene;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
exports.Staff = Staff;
