const registerUser = (req, res) => {
    const {name} = req.body
    res.status(200).json({message: `${name}'s account created successfully`})
}



module.exports = {registerUser}