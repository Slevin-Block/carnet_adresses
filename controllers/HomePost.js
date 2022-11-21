import fs  from "fs"
import {writeUsersCSV} from "../js/utils.js"
import {parse} from "csv"

// type /chemin?name=user
export default (req, res) => {
    
    const parser = parse({ columns: true }, function (err, users) {
        const arrDeleteId = Object.keys(req.body)
        if (arrDeleteId.length > 0){
            users = users.filter(u => !arrDeleteId.includes(u.id))
            writeUsersCSV(users, "./public/data/users.csv", (err) => {
                if(err) throw err
            })
        }
        res.redirect("/")
    })
    fs.createReadStream("./public/data/users.csv").pipe(parser);
}