// enums - enumerables

// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2,
// };

// console.log(statuses.notStarted);

// using enums in typescript

enum Status {
    NotStarted,
    InProgress,
    Done,
};

const notStartedStatus: Status = Status.NotStarted;
// notStartedStatus = "Foos";       // error

console.log(Status.NotStarted);