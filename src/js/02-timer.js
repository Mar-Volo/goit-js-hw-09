import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
flatpickr(datePicker, {
    onClose(selectedDates) {
        const currentTime = selectedDates[0];
        console.log(currentTime);
    }
})
