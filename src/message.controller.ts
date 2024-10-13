import {io} from './socket';

export const Message = (req, res)=> {
    
    io.send('message', req.body.message);
    console.log(req.body.message);
    console.log("This is the Message request and response ..");

    res.send('success !!');
}
