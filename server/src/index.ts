import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import log from './utils/logger';
import router from './routes';
import handlerError from './middlewares/handler-error.middleware';

const app = express();
const port = process.env.PORT || 3500;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(handlerError);

app.listen(port, () => {
  log.info(`Server listening on port ${port}`);
});
