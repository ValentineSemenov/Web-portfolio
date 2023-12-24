<template>
    <div class="contactTest">
      <h1 class="titleTest">Тест</h1>
      <form @submit.prevent="submitForm" class="formTest" id="Test-form">
        <div class="form-itemTest">
          <label for="FIO" class="form-labelTest">Фамилия Имя Очество</label>
          <input type="text" id="FIO" v-model="formData.name" class="form-inputTest" placeholder="Введите ФИО">
        </div>
  
        <div class="form-itemTest">
          <label for="course" class="form-labelTest">Группа</label>
          <select id="course" v-model="formData.course" class="selectTest">
            <optgroup label="Курс 1">
              <option value="1-1">Группа 1-1</option>
              <option value="1-2">Группа 1-2</option>
            </optgroup>
            <optgroup label="Курс 2">
              <option value="2-1">Группа 2-1</option>
              <option value="2-2">Группа 2-2</option>
            </optgroup>
            <optgroup label="Курс 3">
              <option value="3-1">Группа 3-1</option>
              <option value="3-2">Группа 3-2</option>
            </optgroup>
          </select>
        </div>
  
        <div class="form-itemTest">
          <label for="question1" class="form-labelTest">Дайте определение эллипса.</label>
          <input type="text" id="question1" v-model="formData.definition" class="form-inputTest" placeholder="Введите ответ">
        </div>
  
        <div class="form-item">
          <label for="question2" class="form-labelTest">Определитель это:</label>
          <div class="options">
            <div class="options-itemTest" v-for="option in options" :key="option.value">
              <input :id="option.value" type="radio" :value="option.value" v-model="formData.det" class="options-inputTest">
              <label :for="option.value" class="options-labelTest"><span>{{ option.label }}</span></label>
            </div>
          </div>
        </div>
  
        <div class="form-item">
          <label for="question3" class="form-labelTest">Какое понятие не связано с суммой ряда?</label>
          <select id="question3" v-model="formData.series" class="selectTest">
            <option value="" disabled selected>Выберите вариант ответа</option>
            <option value="Частичная сумма">Частичная сумма</option>
            <option value="Приближенные суммы">Приближенные суммы</option>
            <option value="Дискретная сумма">Дискретная сумма</option>
            <option value="Сумма n первых членов">Сумма n первых членов</option>
          </select>
        </div>
  
        <div class="buttonsTest">
          <button type="submit" class="form-buttonTest">Отправить</button>
          <button type="reset" class="form-buttonTest">Очистить</button>
        </div>
      </form>
    </div>
  </template>


<script src="../js/TestComponent.js"></script>
