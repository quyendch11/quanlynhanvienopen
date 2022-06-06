import { Staff ,Gene} from "./quanlynhanvienopen";
let stafflist :Staff[]= [];
stafflist.push(new Staff(1,"han",Gene.MALE,new Date("1994/03/24"),"ha@bb.com",1223344));
stafflist.push(new Staff(2,"kieu",Gene.FEMALE,new Date("1998/04/25"),"ha@bb.com",98467));
function showstaff(staff:Staff) {
    console.log(staff);
}
stafflist.forEach(showstaff);
function remove(idd:number)  {
    for (let i = 0; i < stafflist.length; i++){
        if (idd==stafflist[i].id) {
            stafflist.splice(i, 1);
        }
    }
   return stafflist;
}
console.log(remove(1));