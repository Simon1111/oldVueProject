
/**
 * Конвертирует данные для отправки.
 * допилить параметры.
 * @param data
 * @returns {FormData}
 */

export default {
	methods: {
        convertToFormData(data, exept) {
            let formData = new FormData()
			for(let key in data) {
                if (!!exept && exept.indexOf(key) >= 0 || data[key] === null) continue; // удаление исключений

                if (typeof data[key] == 'boolean') data[key] = (+data[key]).toString(); // преобразование true = 1 || false = 0
                
                if (Array.isArray(data[key])) { // обработка объектов таких как изображения
                    if (typeof data[key][0] == 'object') {
                        data[key].forEach((obj, i) => {
                            Object.entries(obj).forEach(item => {
                                if (typeof item[1] == 'boolean') item[1] = (+item[1]).toString();
                                formData.append(`${key}[${i}][${item[0]}]`, item[1])
                            })
                        })
                    } else {
                        data[key].forEach(val => {
                            formData.append(`${key}[]`, val);
                        })
                    }
                } else {
                    formData.append(key, data[key]);
                }
            }
            return formData;
		}
	}
}