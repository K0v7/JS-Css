class Cliente {

    constructor() {
        this.id = 1;
        this.arrayClientes = [];
    
    }

//Adicionar cliente    
salvar() {
    //alert("Vamos adicionar um cliente")

        let cliente = this.lerDados();
        if(this.validaCampos(cliente)) {
            this.adicionar(cliente);
        }
        console.log(this.arrayClientes);
}

adicionar(cliente) {
this.arrayClientes.push(cliente);
rhis.id++;
}

lerDados() {
    let cliente = {}

    cliente.id = document.getElementById('cliente').value;
    cliente.cnpj = document.getElementById('cnpj').value;
    cliente.telefone = document.getElementById('telefone').value;
    cliente.email = document.getElementById('email').value;

    return cliente;
}

validaCampos(cliente) {
    let msg = '';

    if(cliente.id == '') {
        msg += '- Informe o nome do Cliente \n';
    }

    if(cliente.cnpj == '') {
        msg += '- Informe o CNPJ do Cliente \n';
    }

    if(cliente.telefone == '') {
        msg += '- Informe o telefone do Cliente \n';
    }

    if(cliente.email == '') {
        msg += '- Informe o Email do Cliente \n';
    }

    if(msg != '') {
        alert(msg);
        return false
    }

    return true;
}

//Cancela o que o usuário está fazendo e limpa os campos
cancelar(){
    //alert("Cancelar ações do usuário")

}
}

var cliente = new Cliente();