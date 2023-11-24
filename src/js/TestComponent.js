import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunction';
import $ from 'jquery';

export default {
  name: 'TestComponent',
  mounted(){
    this.validateTestForm();
    updatePageHistory();
  },
  methods: {
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
}








