import Cliente from "../cliente/cliente";
import Produto from "../servico_produto/produto";
import Servico from "../servico_produto/servico";

export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor() {
        this.clientes = []
        this.produtos = []
        this.servicos = []  
    }
    
    public get getClientes(){
        return this.clientes
    }

    public get getProdutos(){
        return this.produtos
    }

    public get getServicos(){
        return this.servicos
    }
    
}