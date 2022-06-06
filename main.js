"use strict";
exports.__esModule = true;
var quanlynhanvienopen_1 = require("./quanlynhanvienopen");
var stafflist = [];
stafflist.push(new quanlynhanvienopen_1.Staff(1, "han", quanlynhanvienopen_1.Gene.MALE, new Date("1994/03/24"), "ha@bb.com", 1223344));
stafflist.push(new quanlynhanvienopen_1.Staff(2, "kieu", quanlynhanvienopen_1.Gene.FEMALE, new Date("1998/04/25"), "ha@bb.com", 98467));
// function showstaff(staff:Staff) {
//     console.log(staff);
// }
// stafflist.forEach(showstaff);
function remove(idd) {
    for (var i = 0; i < stafflist.length; i++) {
        if (idd == stafflist[i].id) {
            stafflist.splice(i, 1);
        }
    }
    return stafflist;
}
console.log(remove(1));
