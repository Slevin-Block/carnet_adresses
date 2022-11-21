import fs  from "fs"
import {writeUsersCSV} from "../js/utils.js"
import {parse} from "csv"
import {errorHandler} from "../js/error.js"

// type /chemin?name=user
export default (req, res) => {
    // AJOUT D'UN NOUVEAU USER
    const parser = parse({ columns: true }, function (err, users) {
        const newUser = {
            id: Date.now(),
            civility: req.body.civility,
            lastname: req.body.lastname.toUpperCase(),
            firstname: req.body.firstname,
            phone: req.body.phone.replaceAll(" ", "").replaceAll("-", ""),
            mail: req.body.mail.toLowerCase(),
            birthday: req.body.birthday,
        }
        if(err) throw err

        // HANDLER ERROR
        const currentError = errorHandler(newUser)
        if (!Object.values(currentError).includes(true)){
            users.push(newUser)
            writeUsersCSV(users, "./public/data/users.csv", (err) => {if(err) throw err})
            res.redirect("/")
        }else{
            res.render("new", {BASE_URL : `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
                error : currentError, user : newUser})
        }

    })
    fs.createReadStream("./public/data/users.csv").pipe(parser);
}