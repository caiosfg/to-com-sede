export default {
    data() {
        return {
            watter: '',
            watters: ['cascatai', 'superlev', 'ouro da serra']
        }
    },
    computed: {
        usuario() {
            return 'Caio'
        }
    },
    created() {
        console.log('Created - Caio Cesar')
    },
    methods: {
        add() {
            this.watters.push(this.fruta)
            this.fruta = ''
        }
    }
}