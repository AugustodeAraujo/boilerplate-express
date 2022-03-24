import express from 'express';
import routes from './routes';
import sequelize from './database/db.js';



const app = express();

sequelize.sync(()=> console.log('Connected to postgres db'))

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at port: ${port}`);
});
