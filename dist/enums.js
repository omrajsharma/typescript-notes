// enums - enumerables
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// };
// console.log(statuses.notStarted);
// using enums in typescript
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
;
var notStartedStatus = Status.NotStarted;
// notStartedStatus = "Foos";       // error
console.log(Status.NotStarted);
