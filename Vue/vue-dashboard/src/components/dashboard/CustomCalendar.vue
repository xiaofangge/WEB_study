<template>
    <div class="custom-calendar">
        <div class="calendar-header">
            <span class="month">{{ monthYear }}</span>
            <span class="weekday">{{ selectedWeekday }}</span>
            <button class="arrow" @click="prevMonth">&#60;</button>
            <button class="arrow" @click="nextMonth">&#62;</button>
        </div>
        <div class="calendar-grid">
            <div class="calendar-weekdays">
                <span v-for="d in weekDays" :key="d" class="weekday-label">{{ d }}</span>
            </div>
            <div class="calendar-days">
                <span v-for="(d, idx) in days" :key="idx"
                    :class="['calendar-day', { today: isToday(d), selected: isSelected(d), 'other-month': d.otherMonth, 'has-dot': d.hasDot }]"
                    @click="selectDate(d)">
                    {{ d.day }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
const props = defineProps({
    modelValue: Date
})
const emit = defineEmits(['update:modelValue'])
const today = new Date()
const current = ref(new Date(props.modelValue || today))
const selected = ref(new Date(props.modelValue || today))
const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dots = [5, 15] // 可自定义有小圆点的日期
const monthYear = computed(() =>
    current.value.toLocaleString('en-US', { month: 'long', year: 'numeric' })
)
const selectedWeekday = computed(() =>
    selected.value.toLocaleString('en-US', { weekday: 'long' })
)
function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate()
}
const days = computed(() => {
    const year = current.value.getFullYear()
    const month = current.value.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const total = daysInMonth(year, month)
    const arr = []
    // 上月补位
    for (let i = 0; i < firstDay; i++) {
        arr.push({ day: '', otherMonth: true })
    }
    // 本月天数
    for (let d = 1; d <= total; d++) {
        arr.push({
            day: d,
            date: new Date(year, month, d),
            otherMonth: false,
            hasDot: dots.includes(d)
        })
    }
    // 补齐42格
    while (arr.length < 42) arr.push({ day: '', otherMonth: true })
    return arr
})
function isToday(d) {
    if (!d.date) return false
    return d.date.toDateString() === today.toDateString()
}
function isSelected(d) {
    if (!d.date) return false
    return d.date.toDateString() === selected.value.toDateString()
}
function selectDate(d) {
    if (!d.date) return
    selected.value = d.date
    emit('update:modelValue', d.date)
}
function prevMonth() {
    current.value = new Date(current.value.getFullYear(), current.value.getMonth() - 1, 1)
}
function nextMonth() {
    current.value = new Date(current.value.getFullYear(), current.value.getMonth() + 1, 1)
}
watch(() => props.modelValue, v => {
    if (v) selected.value = new Date(v)
})
</script>

<style lang="scss" scoped>
.custom-calendar {
    background-image:linear-gradient(to right, #e0eafc,#cfdef3);
    border-radius: 18px;
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.18);
    padding: 24px 24px 18px 24px;
    width: 100%;
    min-width: 220px;
    max-width: 100%;
    box-sizing: border-box;
    color: #fff;

    .calendar-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
        position: relative;

        .month {
            font-weight: bold;
            color: #fff;
            font-size: 1.35rem;
            transform: translateX(-75px);
            letter-spacing: 1px;
            margin: 0 36px;
        }

        .arrow {
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0 12px;
            transition: color 0.2s;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            &:first-child {
                left: 0;
            }

            &:last-child {
                right: 0;
            }

            &:hover {
                color: #409eff;
            }
        }

        .weekday {
            display: none;
        }
    }

    .calendar-grid {
        width: 100%;

        .calendar-weekdays {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            margin-bottom: 8px;

            .weekday-label {
                text-align: center;
                color: #409eff;
                font-weight: 500;
                font-size: 1.05rem;
                letter-spacing: 1px;
            }
        }

        .calendar-days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 2px;

            .calendar-day {
                text-align: center;
                padding: 9px 0;
                font-size: 1.13rem;
                color: #fff;
                border-radius: 50%;
                cursor: pointer;
                transition: background 0.2s, color 0.2s;
                position: relative;

                &.selected {
                    background: #409eff;
                    color: #fff;
                }

                &.today {
                    border: 1.5px solid #409eff;
                }

                &.other-month {
                    color: #23233a;
                    cursor: default;
                }
            }
        }
    }
}
</style>