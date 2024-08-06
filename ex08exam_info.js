const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      java: 0,
      react: 0,
      vue: 0,
      listArr: []
    }
  },

  computed: { // 연산 프로퍼티
    totalPeople() { // 총 인원수
        return this.listArr.length;
    },

    totalSum() {
        // 각 항목 item의 total값은 sum에 더한다. sum은 누적된 총합이고 item은 현재 처리 중인 배열의 요소이다.
        return this.listArr.reduce((sum, item) => sum + item.total, 0); // reduce 메소드의 초기값을 0으로 설정.
    }
  },

  methods: {
    myChange() {
      const total = this.java + this.react + this.vue;
      
      this.listArr.push({
        name: this.name,
        java: this.java,
        react: this.react,
        vue: this.vue,
        total: total,
      });

      // 입력 필드 초기화
      this.name = "";
      this.java = 0;
      this.react = 0;
      this.vue = 0;
    },
  },
}).mount("#app");
