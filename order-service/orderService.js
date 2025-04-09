const express = require ('express')
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/pedidos', (req,res)=> {
    const pedido = req.body;
    console.log ('Pedido recebido', pedido);
    res.send ({message: 'Pedido recebido com sucesso!, pedido'});
});

app.listen(4000, () => console.log ('Order Service rodando na porta 4000'));