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
/*FIM TROCAR LOGIN POR USUARIO*/