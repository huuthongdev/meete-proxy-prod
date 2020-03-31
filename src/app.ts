import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { onError, ErrorMessage, ObjectUtils } from './refs';
import Axios from 'axios';

const app = express();

app.use(cors());
app.use(json());
app.use(onError);

app.use(async (req, res) => {
    Axios({
        url: 'https://user.api.meete.co' + req.path,
        method: req.method as any,
        headers: ObjectUtils.getValues(req.headers,
            [
                'x-meete-client-type',
                'x-meete-client-version',
                'authorization'
            ]
        ),
        params: { ...req.params, ...req.query },
    })
        .then(resData => res.send(resData.data))
        .catch(err => {
            const status = ObjectUtils.getIn(err, 'response.status', 500);
            const data = ObjectUtils.getIn(err, 'response.data', 500);
            res.status(status).send(data)
        })
})

app.get('/', (_, res) => res.send({ message: 'Welcome!' }))
app.use((_, res) => res.status(404).send({ success: false, message: ErrorMessage.INVALID_ROUTE }));



app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res.status(500).send({ success: false, message: ErrorMessage.INTERNAL_SERVER_ERROR });
});

export default app