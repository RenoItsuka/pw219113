const app = new Vue ({
    el: '#app',
    data: {
        saludo: 'Hola Vue'
    },
    beforeCreate(){
        console.log('Antes de crear el objeto Vue');
    },
    created(){
        console.log('El objeto vue fue creado')
    },
    beforeMount(){
        //Esto es antes de que se dibuje las actualizaciones de pantalla
        console.log('El DOM no se ha cargado')
    },
    mounted(){
        //Cuando ya se cargo el payaso, digo la pantalla owo
        console.log('La página o DOM ha sido cargado')
    },
    beforeUpdate(){
        console.log('Antes de actualizar cualquier elemento de la página')
    },
    updated(){
        console.log('La página ha sido actualizado')
    },
    beforeDestroy(){
        console.log('Antes de destruir el objeto Vue')
    },
    destroyed(){
        console.log('EL objeto Vue ha sido destruido')
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
})