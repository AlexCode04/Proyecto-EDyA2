import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';

// Ajusta el path a tu archivo de cuenta de servicio
const serviceAccount = 'Middleware/serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),  // Usa las credenciales de tu cuenta de servicio
});

export const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación.' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = { id: decodedToken.uid };  // Extrae el `uid` y guárdalo en req.user
        next();
    } catch (error) {
        console.error('Error al verificar el token de Firebase:', error);
        return res.status(403).json({ message: 'Token inválido o expirado.' });
    }
};


