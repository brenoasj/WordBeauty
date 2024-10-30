export default class Produto {
    private static idAuto: number = 1
    private id: number
    public nome!: string
    public valorProduto: number
    public vendasProduto: number

    constructor(nome: string, valorProduto: number) {
        this.id = Produto.idAuto++
        this.nome = nome
        this.valorProduto = valorProduto
        this.vendasProduto = 0
    }

    public getId(): number {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(novoNomeProduto: string): void {
        this.nome = novoNomeProduto;
    }

    public getValorProduto(): number {
        return this.valorProduto;
    }

    public setValorProduto(novoValorProduto: number): void {
        this.valorProduto = novoValorProduto
    }

    public get getVendasProdutos(): number {
        return this.vendasProduto
    }

    public addVenda(): void{
        this.vendasProduto ++
    }
}