const loginController = {
    exibirLogin:(req, res) =>{
        res.render('login');
    },

    autenticar: async (req, res) =>{
        const {email, senha} = req.body;

        const userSnapshot = await bd.collection('users'). where('email', '==', email).get();

        if(userSnapshot.empty){
            return res.render('login', {error: 'Email ou senha incorretos'});
        }

        const user = userSnapshot.docs[0].data();

        if (user.senha !== senha){
            return res.render('login', { error: 'Email ou senha incorretos' });
        }

        res.redirect('/index');
    },
};

module.exports = loginController;