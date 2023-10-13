import '../styles/ContactComponent.scss'


    export default {
        name: 'ContactComponent',
        mounted(){
            this.validateTestForm();
        },
        methods: {
            validateTestForm() {
                const form = document.querySelector('.contact form');
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
                        alert("Пожалуйста, выберите пол.");
                        break;
                      }
                    }

                    if(element.type === "email"){
                        if(!element.value){
                            isFormValid = false;
                            alert('Пожалуйста, введите свой email.')
                            break;
                        }
                    }
                  }
              
                  if (isFormValid) {
                    alert("Форма заполнена корректно. Данные могут быть отправлены.");
                    form.reset();
                  }
                });
        },
    }
};