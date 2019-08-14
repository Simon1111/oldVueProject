import axios from 'axios'

export default {
    methods: {                
        loadData(path, params) {            
            axios.get('/json/finance.json').then(
                (response) => {
                    response.data.map((item) => {
                        this.items.push(item);
                    })
                },
                (err) => {
                    console.log(err.response)
                }
            );
        }
    }
}