// type /chemin?name=user
export default (req, res) => {
    res.render("new", {BASE_URL : `http://${process.env.MYHOSTNAME}:${process.env.PORT}`,
        error : {}, user: {}})
}