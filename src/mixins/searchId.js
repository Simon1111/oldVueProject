
/**
 * Ищет по ID
 */

export default {
    methods: {
        searchId(val, arr) {
            let res = ''
            arr.forEach((item, id) => {
                if (arr[id]['id'] == val) {
                    res = arr[id]['name']
                }
            });
            return res;
        }
    }
}