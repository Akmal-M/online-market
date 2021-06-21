const valid = (name, phone, password, confirm_password) => {
    if(!name || !phone || !password || !confirm_password )
        return 'Please fill all fields.'

    // if(!validatePhone(phone))
    //     return 'Invalid phone.'

    if(password.length < 6)
        return  'Password must be at least 6 characters.'

    if(password !== confirm_password)
        return "Confirm password didn't match."
}

// const validatePhone = (phone) => {
//    // const re =    //regex code here
//     return re.test(phone);
// }

export default valid