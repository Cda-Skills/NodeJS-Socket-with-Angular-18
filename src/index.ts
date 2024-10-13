import express from 'express';
import cors from 'cors';
import './socket';
import { routes } from './routes';

const app = express();
app.use(express.json());

// Def of CORS : Cross Origin Resource Sharing
app.use(cors({
    origin: "http://localhost:4200",
}));

routes(app);

// app.get('/', (req, res)=> {
//     res.send('HELLO WORLD !!');
// });

app.listen(8000, () => {
    console.log('En écoute sur le port 8000');
});