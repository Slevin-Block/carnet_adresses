import {writeFile}  from "fs"
import dayjs from "dayjs"
import {stringify} from "csv"

export function writeUsersCSV(records, filename) {
    stringify(records, {header: true},
        (err, data) => {
            if (err) throw err
            writeFile(filename, data, (err) =>{
                if (err) throw err
                else console.log("Well Done Bro !")
            })
        });
}

export function isBirthday (date) {
    const userBirthDay = new Date(date);
    const result = `${userBirthDay.getMonth()+1}-${userBirthDay.getDate()}`
    return (result === dayjs().format("M-D")) ? true : false;
}