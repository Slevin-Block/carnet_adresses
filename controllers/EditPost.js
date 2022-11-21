import fs  from "fs"
import {parse } from "csv"
import {writeUsersCSV} from "../js/utils.js"
import {errorHandler} from "../js/error.js"

// type /chemin?name=user
export default (req, res) => {
    const parser = parse({ columns: true }, function (err, users) {
        const editUser = {
            id: req.body.id,
            civility: req.body.civility,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            phone: req.body.phone,
            mail: req.body.mail,
            birthday: req.body.birthday,
        }
        if(err) throw err

        console.log("EditUser")
        console.log(editUser)

        // HANDLER ERROR
        const currentError = errorHandler(editUser)
        console.log(currentError)
        if (!Object.values(currentError).includes(true)){
            users = users.map(u => u.id===editUser.id ? editUser : u)
            writeUsersCSV(users, "./public/data/users.csv", (err) => {if(err) throw err})
            res.redirect("/")
        }else{
            res.render("edit", {BASE_URL : `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
                error : currentError, user : editUser})
        }
    })
    fs.createReadStream("./public/data/users.csv").pipe(parser);
}