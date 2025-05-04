import { defineStore } from "pinia";

const useUsersStore = defineStore('user', {
    state: () => {
        return {
            name: '心潮',
            age: 25,
        }
    },
    getters: {
        getAddAge: (state) => {
            return (num: number) => state.age + num;
        },
        getNameAndAge(): string {
            return `${this.name}${this.getAddAge(1000)}`
        }
    },
    actions: {
        saveName(name: string):void {
            this.name = name;
        }
    }
})

export default useUsersStore