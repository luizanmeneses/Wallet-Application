//Função para que quando acessar encontre o email com os dados já guardados antes
window.onload = () =>{
    const email = localStorage.getItem("@WallatApp:userEmail")
    console.log(email);
};