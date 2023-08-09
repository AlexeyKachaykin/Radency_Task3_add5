import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import noteRoutes from './routes/noteRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', noteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
