/*Formulario de Registro de usuarios*/
document.addEventListener('DOMContentLoaded', (event) => {
    const boxdelogin = document.getElementById('boxdelogin');
    const user = document.getElementById('usuario');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confsenha = document.getElementById('confsenha');

    boxdelogin.addEventListener('submit',(event) => {
        event.preventDefault();
        formcheck();
    });

    /*Função para Checar Cada Vez que Focar*/
    user.addEventListener("blur", () =>{
        usercheck();
    });
    email.addEventListener("blur", () =>{
        emailcheck();
    });
    senha.addEventListener("blur", () =>{
        senhacheck();
    });
    confsenha.addEventListener("blur", () =>{
        confsenhacheck();
    });
    /*-----FIM DAS FUNÇÕES DE FOCO-----*/

        /*Função para Fazer Checagem Se o Usuario Preencheu o Usuario*/
        function usercheck(){
        const uservalue = user.value;
        if(uservalue===""){
            alerta(user, "*Preencha os dados do Usuário.");
        }else{
            const aux=user.parentElement;
            const caixadetexto=aux.parentElement;
            caixadetexto.className="dados"
            aux.className="inputteste"
        }}
        /*-----FIM DA FUNÇÂO USUARIO-----*/

        /*Função para Fazer Checagem Se o Usuario Preencheu o E-mail*/
        function emailcheck(){
            const emailvalue = email.value;
            if(emailvalue===""){
                alerta(email, "*Preencha os dados do E-mail.");
            }else{
                const aux=email.parentElement;
                const caixadetexto=aux.parentElement;
                caixadetexto.className="dados"
                aux.className="inputteste"
            }}
        /*-----FIM DA FUNÇÂO EMAIL-----*/

        /*Função para Fazer Checagem Se o Usuario Preencheu a Senha*/
        function senhacheck(){
            const senhavalue = senha.value;
            if(senhavalue===""){
                alerta(senha, "*Digite sua Senha.");
            }else if(senhavalue.length<8){
                alerta(senha, "*A senha deve ter no minimo 8 caracteres.");
            } else{
                const aux=senha.parentElement;
                const caixadetexto=aux.parentElement;
                caixadetexto.className="dados"
                aux.className="inputteste"
            }}
        /*-----FIM DA FUNÇÂO SENHA-----*/

        /*Função para Fazer Checagem Se o Usuario Confirmou a Senha*/
        function confsenhacheck(){
            const confsenhavalue = confsenha.value;
            if(confsenhavalue===""){
                alerta(confsenha, "*Confirme a Senha digitada.");
            }else if(confsenha.value!=senha.value){
                alerta(confsenha, "*As Senhas não coincidem.");
            } else{
                const aux=confsenha.parentElement;
                const caixadetexto=aux.parentElement;
                caixadetexto.className="dados"
                aux.className="inputteste"
            }}
        /*-----FIM DA FUNÇÂO CONFIRMAR SENHA-----*/

        /*Função para Fazer Checagem Final do Formulario*/
            function formcheck(){
                usercheck();
                emailcheck();
                senhacheck();
                confsenhacheck();

                const dadoscadastrados=boxdelogin.querySelectorAll(".dados");
                const tudook=[...dadoscadastrados].every((item) => {
                    return item.className=="dados"
                }); 
                if (tudook){
                    const usercadastro={
                        user: user.value,
                        email: email.value,
                        senha: senha.value
                    };
                    /*console.log('Dados cadastrados:', usercadastro);
                    localStorage.setItem('usercadastro', JSON.stringify(usercadastro));*/

                    let lista=JSON.parse(localStorage.getItem('lista')) || [];
                    /*Inicio Email e Usuário Existente*/
                    if(true){
                        const jaexiste=lista.find(arrombado=>arrombado.email==email.value);
                        const jaexiste2=lista.find(arrombado=>arrombado.user==user.value);
                        if(jaexiste && jaexiste2){
                            alerta(email, '*Email já cadastrado');
                            alerta(user, '*Usuário já cadastrado');
                            return;
                        } else if(jaexiste){
                            alerta(email, '*Email já cadastrado');
                            return;
                        }else if(jaexiste2){
                            alerta(user, '*Usuário já cadastrado');
                            return;
                        }
                    };
                    /*---FIM Email e Usuário Existente---*/

                    lista.push(usercadastro);
                    localStorage.setItem('lista',JSON.stringify(lista));
                    console.log('Cadastros:', lista);
                    popup('Cadastro Realizado com Sucesso','Redirecionando para o Login!');
                    setTimeout(function() {
                        location.href="./6-login.html";
                    },1500);

                } else{
                    popuprev('Cadastro Inválido','Prencha os Campos Obrigatórios');
                }
            }
        /*-----FIM DA FUNÇÂO CHECAQUEM FINAL-----*/
    
        /*Função para Mensagem de Alerta*/
        function alerta(input, message){
            const aux=input.parentElement;
            const caixadetexto=aux.parentElement;
            const alertatexto=caixadetexto.querySelector("a");
            alertatexto.innerText=message;
            caixadetexto.className="dados erro"
            aux.className="inputteste erro"
        }
        function popup(msg1, msg2){
            const mensagem=document.getElementById('boasvindas');
            const ico=document.getElementById('icone');
            const texto=document.getElementById('texto-1');
            const texto2=document.getElementById('texto-2');
            mensagem.className="boasvindas erro";
            ico.className="fa-regular fa-circle-check";
            texto.innerText=msg1
            texto2.innerText=msg2
    
            setTimeout(function() {
                mensagem.className="boasvindas";
            },2000);
        }
        function popuprev(msg1,msg2){
            const mensagem=document.getElementById('boasvindas');
            const ico=document.getElementById('icone');
            const texto=document.getElementById('texto-1');
            const texto2=document.getElementById('texto-2');
            mensagem.className="boasvindas erro";
            ico.className="fa-regular fa-circle-xmark";
            texto.innerText=msg1
            texto2.innerText=msg2
    
            setTimeout(function() {
                mensagem.className="boasvindas";
            },2000);
        }
        /*-----FIM DA FUNÇÂO MENSAGEM DE ALERTA-----*/



});
/*---------FIM REGISTRO DE USUARIOS---------*/







