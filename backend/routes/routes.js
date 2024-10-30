import express from 'express';
import { 
    getAllPosts, 
    getAllPostById, 
    createPost, 
    updatePost, 
    deletePost, 
    addComment, 
    addReply,
    getCommentsByPostId,
    getRepliesByCommentId,
    getPostsController
} from '../controllers/postController.js';

import { createInfo, updateInfo, getInfo, getBasicUserInfo } from '../controllers/userInfController.js';

import { verifyToken } from '../Middleware/authMiddleware.js';
import upload from '../Middleware/multer.js';
import { registerUser, loginUser } from '../controllers/UserController.js';

const router = express.Router();

// Rutas de CRUD
router.get('/', verifyToken, getAllPosts);           // Obtener todos los posts
router.get('/:id',verifyToken, getAllPostById);        // Obtener un post por ID
router.post('/create-post',verifyToken, upload.single('file'), createPost);           // Crear un nuevo post
router.put('/:id',verifyToken, updatePost);         // Actualizar un post por ID
router.delete('/:id',verifyToken, deletePost);      // Eliminar un post por ID
router.get('/pictures',verifyToken, getPostsController); // Obtener posts con fotos de perfil
// Rutas para manejar comentarios y respuestas
router.post('/:id/comments',verifyToken, addComment); // Agregar un comentario a un post
router.get('/:id/comments',verifyToken, getCommentsByPostId); // Obtener todos los comentarios de un post
router.post('/:id/comments/:commentId/replies',verifyToken, addReply); // Agregar una respuesta a un comentario
router.get('/:id/comments/:commentId/replies',verifyToken, getRepliesByCommentId); // Obtener respuestas de un comentario

// Rutas de la información del usuario
router.post('/userinfo', verifyToken, upload.single('profileImage'), createInfo);
router.put('/userinfo/:id', verifyToken, updateInfo);
router.get('/userinfo/get', verifyToken, getInfo);  // Obtener la información del usuario
// Rutas user
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/userinfo/basic', verifyToken, getBasicUserInfo);

export default router;
