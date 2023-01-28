
exports.CreateUser = (req, res, next) => {   
    const error = [];

    if (!req.body.firstName || req.body.firstName.trim() === ""){
        error.push({field: "firstName", 
            message :"please enter valid first name"})
    };
    if(!req.body.lastName || req.body.lastName.trim() ===""){
        error.push({
            field: "lastName",
            message : "please enter valid last name"
        })
    };
    if(!req.body.email || req.body.email.trim() === ""){
        error.push({
            field: "email",
            message : "please enter valid email"
        });
    }
    if(!req.body.password || req.body.password.trim() === "" ){
        error.push({
            field: "password",
            message : "password was not entered"
        })
    }
    if (req.body.password != req.body.password1) {
        error.push({
            field: "password",
            message : "Password do no match"
        })
    }
    if (error.length > 0){
        res.status(400).json({
            message: "Unsuccesfull to create a User",
            data : error
        })
    }else {
        next();//move on to the next middleware
    }
};