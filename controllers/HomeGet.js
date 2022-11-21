import fs from "fs"
import { parse } from "csv"
import { isBirthday } from "../js/utils.js";

export default (req, res) => {
    
    fs.createReadStream("./public/data/users.csv")
        .pipe(parse({ columns: true }, (err, records) => {
            if(err) throw err
            const users = records.map(u => Object.assign({}, u, {isBirthday : isBirthday(u.birthday)}))
            //const users = records.map(u => {...u, isBirthday : isBirthday(u.birthday)})
            res.render("index", { BASE_URL: `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
                users: users , allCheck : false})
    }));
}