(function() {
    const { createApp } = Vue;

createApp({
    data() {
        return {
            key:'값1',
            key2:'값2',
            message:'안녕하세요',
            htmlString:'<b><p style="color:blue;">맑게 갠 파란 하늘🌤️</p></b>',
            num1:'0',
            num2:'0',
            txtMessage:'',
            daumlogo:'https://t1.daumcdn.net/daumtop_deco/images/pctop/2023/logo_daum.png'
        }
    },
    methods: {
        myFunc() {
            console.log(this.message);
        },
        myChange1() {
            this.message = "안녕";
        },
        myChange2() {
            this.message = "반가워";
        },
    },
}).mount('#app');
})();