import express,{Request,Response} from 'express';
const app = express()

// const PORT = process.env.port || 5000;
// const port = 3000;

// middleware
app.use(express.json());
app.use(express.text());



app.get('/', (req:Request, res:Response) => {
    res.send('Hello  server mama')
})

app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send('another response')
    
})


export default app;
