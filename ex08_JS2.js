(function() {
const { createApp } = Vue;

createApp({
  data() {
    return {
      ypay: 0,
      busers: [
        { number: "10", name: "총무부", tel: "111-1111" },
        { number: "20", name: "영업부", tel: "222-2222" },
        { number: "30", name: "전산부", tel: "333-3333" },
        { number: "40", name: "관리부", tel: "444-4444" },
      ],
      cssStyleTest: {
        color: "skyblue",
        fontSize: "20px",
      },
    };
  },
}).mount("#app2");
})();