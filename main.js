const { createApp } = Vue


createApp({
    data() {
        return {
            tasks: [
                { text: "Fare la spesa", done: false },
                { text: "Dare da mangiare al gatto", done: false },
                { text: "Buttare la spazzatura", done: false },
                { text: "Fare l'esercizio di Boolean", done: true }
            ],
            newTask: {
                text: "",
                done: false
            },
            cancelling: false,
            writing: false
        }
    },
    created() {

    },
    methods: {
        changeCursor(e) {
            let board = document.querySelector(".list");
            if (e.target.classList.contains("sponge")) {
                if (!this.cancelling) {
                    board.style.cursor = "url('./sponge-cursor.png'), auto";
                    this.cancelling = true
                    if (this.writing) this.writing = false
                } else {
                    board.style.cursor = "auto";
                    this.cancelling = false
                }
            } else if (e.target.classList.contains("chulk")) {
                if (!this.writing) {
                    board.style.cursor = "url('./chulk-cursor.png'), auto";
                    this.writing = true
                } else {
                    board.style.cursor = "auto";
                    this.writing = false
                }
            }
        },
        deleteLi(index, task) {
            if (this.cancelling) {
                this.tasks.splice(index, 1)
            } else {
                if (task.done === true) {
                    task.done = false
                } else task.done = true

            }
        },
        addTask() {
            let board = document.querySelector(".list");
            this.tasks.push(this.newTask)
            this.writing = false
            board.style.cursor = "auto";
        }
    },

}).mount('#app')