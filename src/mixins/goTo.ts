export default {
    methods: {
        goTo(val,text) {
            if(text.leght) text = "Уверены что хотите продолжить?";
            let alert = confirm(text);
            if (alert) val();
        }
    }
}