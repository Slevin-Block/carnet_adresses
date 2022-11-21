import fs  from "fs"
import {writeUsersCSV} from "../js/utils.js"
import {parse} from "csv"

// type /chemin?name=user
export default (req, res) => {
    fs.createReadStream("./public/data/users.csv")
        .pipe(parse({ columns: true }, (err, users) => {
            
            const idUserDelete = req.query.id
            users = users.filter(u => u.id !== idUserDelete)
            writeUsersCSV(users, "./public/data/users.csv", (err) => {
                if(err) throw err
            })
            res.redirect("/")
    }));
}