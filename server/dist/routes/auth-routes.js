import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    // TODO: If the user exists and the password is correct, return a JWT 
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ message: 'LOL, THAT’S NOT YOUR NAME' });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        return res.status(401).json({ message: 'HA HA HA WRONG PASSCODE PLEASE TRY AGAIN' });
    }
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        return res.status(500).json({ message: 'Missing JWT secret key' });
    }
    const token = jwt.sign({ username, id: user.id }, // Payload
    secretKey, // Secret Key
    { expiresIn: '1h' } // Expiration
    );
    // ✅ Return token response
    return res.json({
        message: 'Login successful!',
        access_token: token,
        token_type: 'Bearer',
    });
};
// Initialize Router
const router = Router();
router.post('/login', login);
export default router;
