const vue = new Vue({
    el:"#app",
    data:{
        produtos:[],
        produto:false,
        carrinho:[],
        carrinhoTotal:0
    },
    filters:{
        numeroPreco(valor){
            return valor.toLocaleString("pt-BR",{style:"currency", currency:"BRL"});
        }
    },
    methods:{
        fetchProdutos(){
            fetch("./api/produtos.json")
            .then(r=>r.json())
            .then(r=>{this.produtos=r}) },
        buscarProduto(id){
            fetch(`./api/produtos/${id}/dados.json`)
            .then(r=>r.json())
            .then(r=>{this.produto=r})
        },

        adicionarItem(){
            this.produto.estoque--;
        }
    },
    created(){
        this.fetchProdutos();
    }
})