import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

export default {
  name: 'TestComponent',
  data() {
    return {
      formData: {
        name: '',
        course: '',
        definition: '',
        det: '',
        series: ''
      },
      options: [
        { value: 'first', label: 'Число' },
        { value: 'second', label: 'Матрица' },
        { value: 'third', label: 'Множество' },
        { value: 'fourth', label: 'Последовательность' }
      ]
    };
  },
  mounted(){
    this.validateTestForm();
    updatePageHistory();
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        alert('Форма заполнена корректно. Данные могут быть отправлены.');
        this.resetForm();
      }
    },
    validateForm() {
      if (!this.formData.name || !this.formData.course || !this.formData.definition || !this.formData.det || !this.formData.series) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return false;
      }

      if (!/\d/.test(this.formData.definition)) {
        alert('Пожалуйста, введите целочисленное значение.');
        return false;
      }

      return true;
    },
    resetForm() {
      this.formData = {
        name: '',
        course: '',
        definition: '',
        det: '',
        series: ''
      };
    },
    validateTestForm() {
      const form = $('.contactTest form');
      const formElements = form[0].elements;

      form.on("submit", function (e) {
        e.preventDefault();
        let isFormValid = true;

        for (let i = 0; i < formElements.length; i++) {
          const element = $(formElements[i]);

          if (element.attr('type') === "text") {
            if (!element.val()) {
              isFormValid = false;
              alert("Пожалуйста, заполните все обязательные поля.");
              element.focus();
              break;
            }
          }

          if (element.attr('type') === "radio") {
            const radioGroupName = element.attr('name');
            const radioGroup = $(`input[name="${radioGroupName}"]`);
            let isRadioGroupValid = false;

            for (let j = 0; j < radioGroup.length; j++) {
              if (radioGroup[j].checked) {
                isRadioGroupValid = true;
                break;
              }
            }

            if (!isRadioGroupValid) {
              isFormValid = false;
              alert("Пожалуйста, выберите ответ на вопрос.");
              break;
            }
          }
        }

        const question1Input = $('#question1');
        const value = question1Input.val().trim();
        if (!/\d/.test(value)) {
          alert("Пожалуйста, введите целочисленное значение.");
          question1Input.focus();
        }

        if (isFormValid) {
          alert("Форма заполнена корректно. Данные могут быть отправлены.");
          form[0].reset();
        }
      });
    }
  }
};