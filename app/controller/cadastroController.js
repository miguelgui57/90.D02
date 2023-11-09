const cadastroController = {
    exibirCadastro: (req, res) => {
        res.render('cadastro');
    },

    cadastrar: async (req, res) => {
        const {email, senha, confirmaSenha, dataNascimento } = req.body;

        if (senha !== confirmaSenha){
            return res.render('cadastro', { error: 'A senha e a confirmação de senha não coincidem'});
        }
        const userExists = await bd.collection('users').where('email', '==', email).get();
        if(!userExists.empty){
            return res.render('cadastro', {error:'Este email já está cadastrado' });
        }

        const userRef = bd.collection('users').doc();
        await userRef.set({
            email,
            senha,
            dataNascimento,
        });

        res.redirect('/login');
    },
};

module.exports = cadastroController;