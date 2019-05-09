const app = new Vue({
    el:'#app',
    data: {
        Titulo: 'Hola mundo pero con Vue',
        frutas: ['Manzana','Uva','Peras','Fresas'],
        frutas2: [
            {nombre: 'Manzana', cantidad: 11},
            {nombre: 'Uva', cantidad: 0},
            {nombre: 'Peras', cantidad: 80},
            {nombre: 'Fresas', cantidad: 110},
            {nombre: 'Mango', cantidad: 75},
            {nombre: 'Sandia', cantidad: 50}
        ],
        nuevaFruta:'',
        total: 0
    },
    methods: {
        agregarFruta(){
            //console.log("Distes clic");
            if(this.nuevaFruta!=''){
                this.frutas.push(this.nuevaFruta);
            this.frutas2.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });
            this.nuevaFruta = '';
            }
            
            
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas2){
                this.total=this.total+fruta.cantidad;
                //this.total+=fruta.cantidad; Forma Sistemas, osease mas pro aca bien chilo apoco no c8
            }
            return this.total;
        }
    }
});