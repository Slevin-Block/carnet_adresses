import fs  from "fs"
import dayjs from  "dayjs"
import {parse} from "csv"

// type /chemin?id=idUser
export default (req, res) => {
    const parser = parse({ columns: true }, function (err, users) {
        if(err) throw err

        const user = users.find(u => u.id === req.query.id)
        res.render("user", {BASE_URL : `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
            user : user, birthday: dayjs(user.birthday).format('DD/MM/YYYY')})
    })
    fs.createReadStream("./public/data/users.csv").pipe(parser);
}
