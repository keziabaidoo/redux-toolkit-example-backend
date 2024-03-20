import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from 'morgan';
import ticketRoute from './routes/ticketRoute.js';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './db.js';
import { errorHandler } from './middleware/errorHandler.js';
import { swaggerOptions } from './helpers/swagger.config.js';

const server = express();
const PORT = process.env.PORT 

const swaggerSpec = swaggerJSDoc(swaggerOptions)

// middleware
server.use(morgan('dev'));
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cookieParser());
// allowing metadata to pass requests or allows origin
server.use(cors({credentials: true, origin:'http://localhost:5173'}));
server.use('/api/tickets', ticketRoute);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
server.use('/api/users', userRoute);
server.use(errorHandler);


server.listen(PORT, (req, res) => {
    connectDb()
    console.log(`Server running on port ${PORT}`);
})

// NODEMON