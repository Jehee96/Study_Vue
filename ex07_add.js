const { createApp } = Vue;

createApp({
    data() {
        return {
            list : ['아이스아메리카노', '오렌지 주스', '밀크티', '바닐라라떼'],
            objArr : [
                {site:'양양', taketime:'2시간'},
                {site:'부산', taketime:'2시간 30분'},
                {site:'제주도', taketime:'1시간 30분'},
            ],
            myArr : ['일', '이', '삼', '사', '오'],
            numArr : [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList() {
            this.myArr.push('추가');
        },
        addListIndex(arg) {
            this.myArr.splice(arg, 0, '삽입'); // 배열 요소를 제거하고 새 요소로 대체
        },
        changeList(arg) {
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg) {
            this.myArr.splice(arg, 1); // 삭제
        }
    },
}).mount('#app');