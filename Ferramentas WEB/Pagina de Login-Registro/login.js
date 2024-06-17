/*Formulario de Login de usuarios*/
document.addEventListener('DOMContentLoaded', (event) => {
    const boxdelogin = document.getElementById('boxdelogin');
    const email=document.getElementById('email');
    const senha=document.getElementById('senha');

    boxdelogin.addEventListener('submit',(event) => {
        event.preventDefault();
        login();
        formcheck();
    });

    /*Função para Checar Cada Vez que Focar*/
    email.addEventListener("blur", () =>{
        emailcheck();
    });
    senha.addEventListener("blur", () =>{
        senhacheck();
    });
    /*-----FIM DAS FUNÇÕES DE FOCO-----*/
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
            }else{
                const aux=senha.parentElement;
                const caixadetexto=aux.parentElement;
                caixadetexto.className="dados"
                aux.className="inputteste"
            }}
        /*-----FIM DA FUNÇÂO SENHA-----*/

        /*Função para Fazer Checagem Final do Formulario*/
            function formcheck(){
                emailcheck();
                senhacheck(); 
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
        /*-----FIM DA FUNÇÂO MENSAGEM DE ALERTA-----*/

    /*Função para Pagina de Login(Validação Manual de Login ADMIN) */
    function login(){
        const email=document.getElementById('email').value;
        const senha=document.getElementById('senha').value;

        const lista=JSON.parse(localStorage.getItem('lista')) || [];
        const registro=lista.find(u=>u.email==email && u.senha==senha);

        if(email=="admin" && senha==12345){
            popup('Login Sucedido','Redirecionando para Home!');
            localStorage.setItem('logado', 'true');
            localStorage.setItem('Admin','true');
            setTimeout(function() {
                location.href="./1-index.html";
            },1500);
        }else if(registro){
            popup('Login Sucedido','Redirecionando para Home!');
            localStorage.setItem('usuarioatual', registro.user);
            localStorage.setItem('emailatual',registro.email);/*Tava fazendo pra pagina de perfil*/
            localStorage.setItem('Admin','falso');
            localStorage.setItem('logado', 'true');
            setTimeout(function() {
                location.href="./1-index.html";
            },1500);
        }else if(!registro && email!="" && senha!=""){
            popuprev('Login Recusado','Usuario não Cadastrado!');
            return;
        }else{
            popuprev('Login Recusado','Dados Inválidos!');
        }
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

    /*---------FIM FUNÇÃO LOGIN---------*/
});
/*---------FIM LOGIN DE USUARIOS---------*/







