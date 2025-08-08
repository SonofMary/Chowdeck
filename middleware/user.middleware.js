const validateCreatedUser = (req, res, next) => {

    const {name, phone} = req.body 

    if(!name || !phone) {
         return res.status(404).json({message: "You never put name or phone number"})
    }
    else {
        next()
    }

} 


module.exports = {validateCreatedUser}