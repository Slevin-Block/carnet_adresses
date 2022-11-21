export const errorHandler = (user) => {
    const error = {msg: {}}

    const regExName = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)//   /^[a-z ,.'-]+$/i)
    const regExMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const regExPhone = new RegExp(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)
    //const regExDate = new RegExp(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
    
    error.lastname = !regExName.test(user.lastname)
    error.firstname = !regExName.test(user.firstname)
    error.mail = !regExMail.test(user.mail)
    error.phone = !regExPhone.test(user.phone)
    //error.birthday = !regExDate.test(user.phone)

    if (error.lastname)     error.msg.lastname    = "Erreur de saisi : nom incorrect"
    if (error.firstname)    error.msg.firstname   = "Erreur de saisi : prénom incorrect"
    if (error.mail)         error.msg.mail        = "Erreur de saisi : mail incorrect"
    if (error.phone)        error.msg.phone       = "Erreur de saisi : numéro de téléphone incorrect"
    if (error.birthday)     error.msg.birthday    = "Erreur de saisi : date incorrect"
    
    return error
}