export default {
    methods: {
        cloneObject(clone) {
            return JSON.parse(JSON.stringify(clone));
        }
    }
}