import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please write ur name"),
    email: Yup.string().email().required("Please write ur email"),
    password: Yup.string().min(6).required("give the password"),
    confirm_password: Yup.string().required("give the password").oneOf([Yup.ref('password'),
        null, "Password matched"
    ])

})


// name: "",
// email: "",
// password: "",
// confirm_password: "",