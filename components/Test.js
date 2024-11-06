export const myLogic = {
    data(){
        return {
            message: 'Hello from the logic file'
        }
    },
    methods: {
        showMessage(){
            console.log(this.message);
        }
    }
};
