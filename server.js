import fastify from 'fastify'
import cors from '@fastify/cors'

const server = fastify();

server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST']
})

const banco = [
    {
        email: 'carloscavalos@gmail.com',
        senha: '2500'

}
];

server.post('/login', (request) => {
    const usuario = request.body;
    for(const userBanco of banco) {
        if (userBanco.email === usuario.email 
        && usuario.senha === userBanco.senha){
            return {mensagem:'Pode entrar'};
        }else{
            return {mensagem: 'Credenciais inválidas'};
        }
    }
});

server.get('/login', () => {
    return 'Olá Marcão Foda, que massa!'
});

server.listen({
    port: 3333
});