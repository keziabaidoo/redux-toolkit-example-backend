import jwt from 'jsonwebtoken';
import User from '../model/userModel.js'

export const authUser = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({error: 'No token provided'})
    }

    if (token) {

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
           
            if (err) {
                res.status(401);

                throw new Error('wrong token')
           
            } else {

                console.log({ decoded })
                
                const user = await User.findById(decoded.id)
               
                req.user = user;
                next();
            }
        })
    } else {
        res.status(401);
        throw new Error('no token');
    }

}