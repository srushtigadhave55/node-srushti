
const http=require('http');
const HOSTNAME ='127.0.0.1';
const PORT ='3000';
const server=http.createServer((req,res)=>
{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('Heelo Srushti\n');
});
server.listen(PORT,HOSTNAME,()=>{
    Console.log(`server running ${HOSTNAME} ON PORT ${PORT}.`);
})