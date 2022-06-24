

//Your code here
function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

function createEmployeeRecords(arr){
    //return [createEmployeeRecord(arr[0]), createEmployeeRecord(arr[1])]
    let returnedArr = []
    for (let i = 0; i<arr.length; i++){
        returnedArr.push(createEmployeeRecord(arr[i]))
    }
    return returnedArr;
}


function createTimeInEvent(bpRecord, newEvent){
    let updatedBpRecord = createEmployeeRecord(bpRecord)
    updatedBpRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseFloat(`${newEvent.slice(11)}`),
        date: `${newEvent.slice(0, 10)}`
    })
    return updatedBpRecord;
}

function createTimeOutEvent(bpRecord, newEvent){
    let updatedBpRecord = createEmployeeRecord(bpRecord)
    updatedBpRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseFloat(`${newEvent.slice(11)}`),
        date: `${newEvent.slice(0, 10)}`
    })
    return updatedBpRecord;
}

function hoursWorkedOnDate(record, date = '0044-03-15', hourIn = '0900', hourOut = '1100'){
    let timeInRecord = createTimeInEvent(record, `${date} ${hourIn}`)
    let timeOutRecord = createTimeOutEvent(record, `${date} ${hourOut}`)
    let timeIn = parseFloat(timeInRecord.timeInEvents[0].hour)
    let timeOut = parseFloat(timeOutRecord.timeOutEvents[0].hour)
    return (timeOut - timeIn)/100
}

//allWagesFor(["Julius", "Caesar", "General", 1000])

function wagesEarnedOnDate(record, date){
    let timeWorked = hoursWorkedOnDate(record, date)
    return record.payPerHour * timeWorked;
}


function allWagesFor(record){
    let updateRecord = createEmployeeRecord(record)
    let day1 = createTimeInEvent(updateRecord, "0044-03-14 0900")
    let day2 = createTimeInEvent(updateRecord, "0044-03-15 0900")
    let day1TimeOut = createTimeOutEvent(updateRecord, "0044-03-14 2100")
    let day2TimeOut = createTimeOutEvent(updateRecord, "0044-03-15 1100")
    day1.timeOutEvents = day1TimeOut.timeOutEvents
    day2.timeOutEvents = day2TimeOut.timeOutEvents

    let day1Time = hoursWorkedOnDate(day1, "0044-03-14")
    let day2Time = hoursWorkedOnDate(day2, "0044-03-15", "0900", "2100")
    return (updateRecord.payPerHour * day1Time) + (updateRecord.payPerHour * day1Time)
    
}

console.log(allWagesFor(["Julius", "Caesar", "General", 27]))

function createEmployeeRecords(src){
    let arr = []
    for(let i = 0; i<src.length; i++){
        arr.push(createEmployeeRecord(src[i]))
    }
    return arr;
}

function calculatePayroll(data){
    return data.reduce(function(elem, data){
        return elem + allWagesFor.call(data)
    }, 0)
}