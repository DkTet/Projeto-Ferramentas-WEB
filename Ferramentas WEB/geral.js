/*Incio trocar o botão LOGIN pelo Menu do Usuario*/
document.addEventListener('DOMContentLoaded', (event) => {
    const logado=localStorage.getItem('logado');
    const admin=localStorage.getItem('Admin');
    const login=document.getElementById('login-1');
    const user=document.getElementById('menuuser');
    const username=document.getElementById('username');
    const teste=localStorage.getItem('usuarioatual');
    const logoff=document.getElementById('sair');

    if (logado=='true' && admin=='true'){/*Logar no Admin*/
        login.className='login-1 logado';
        user.className='menuuser logado';
        username.innerText='Admin';
    }else if (logado=='true') {/*Logar no Usuario*/
        login.className='login-1 logado';
        user.className='menuuser logado';
        username.innerText=teste;
    }
    logoff.addEventListener('click', () =>{
        localStorage.setItem('logado', 'false');
        window.location.reload(true);
    })
});



document.addEventListener('DOMContentLoaded', (event) =>{
    const editores1=document.getElementById('editores-1');
    const favoritos1=document.getElementById('favoritos-1');
    const editores2=document.getElementById('editores-2');
    const favoritos2=document.getElementById('favoritos-2');
        setInterval(function() {
            editores1.id="editores-2";
            favoritos1.id="favoritos-2";
            editores2.id="editores-1";
            favoritos2.id="favoritos-1";

            setTimeout(function() {
                editores1.id="editores-1";
                favoritos1.id="favoritos-1";
                editores2.id="editores-2";
                favoritos2.id="favoritos-2";
            },5000);
        },10000);
})

/*FIM TROCAR LOGIN POR USUARIO*/