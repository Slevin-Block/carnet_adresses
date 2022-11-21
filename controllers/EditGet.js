import fs  from "fs"
import {parse} from "csv"

// type /chemin?name=user
export default (req, res) => {

    const parser = parse({ columns: true }, function (err, users) {
        if(err) throw err
        res.render("edit", {BASE_URL : `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
            user : users.find(u => u.id === req.query.id), error : {}})
    })
    fs.createReadStream("./public/data/users.csv").pipe(parser);
}