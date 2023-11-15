import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunction';

export default {
  name: 'TestComponent',
  mounted(){
    this.validateTestForm();
    updatePageHistory();
  },
  methods: {
    validateTestForm() {
      const form = document.querySelector('.contactTest form');
      const formElements = form.elements;
    
    
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isFormValid = true;
    
        for (let i = 0; i < formElements.length; i++) {
          const element = formElements[i];
    
          if (element.type === "text") {
            if (!element.value) {
              isFormValid = false;
              alert("Пожалуйста, заполните все обязательные поля.");
              element.focus();
              break;
            }
          }
    
          if (element.type === "radio") {
            const radioGroupName = element.name;
            const radioGroup = document.getElementsByName(radioGroupName);
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

        const question1Input = document.getElementById('question1')
        const value = question1Input.value.trim();
        if (!/\d/.test(value)) {
          alert("Пожалуйста, введите целочисленное значение.");
          question1Input.focus();
        }

        if (isFormValid) {
          alert("Форма заполнена корректно. Данные могут быть отправлены.");
          form.reset();
        }
      });
    }
    
  }
}








