import express,{NextFunction, Request,Response} from 'express';
const app = express()

// const PORT = process.env.port || 5000;
// const port = 3000;

// middleware
app.use(express.json());
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url,req.method, req.hostname);
    
    next()
}



app.get('/',logger, (req:Request, res:Response) => {
    res.json({
        name:'next level web development'
    })
})

app.post('/', logger,(req: Request, res: Response) => {
    console.log(req.body);
      res.send('Hello  server mama')
    
})


export default app;
