<template>
<!-- 13 Высшая математика Textarea Radio 2 Select 3 -->

<div class="contactTest">
    <h1 class="titleTest">Тест</h1>
    <form action="mailto:semenov.vualya@gmail.com" method="POST" class="formTest" id="Test-form">
        <div class="form-itemTest">
            <label for="FIO" class="form-labelTest">Фамилия Имя Очевство </label>
            <input type="text" id="FIO" name="name" class="form-inputTest" placeholder="Введите ФИО" >
        </div>

        <div class="form-itemTest">
            <label for="course" class="form-labelTest">Группа </label>
            <select id="course" name="course" class="selectTest">
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
            <input type="text" id="question1" name="name" class="form-inputTest" placeholder="Введите ответ" >
        </div>

        <div class="form-item">
            <label for="course" class="form-labelTest">Определитель это: </label>
            <div class="options">
                <div class="options-itemTest">
                    <input id="first" checked type="radio" value="first" name="questions" class="options-inputTest">
                    <label for="first" class="options-labelTest"><span>Число</span></label>
                </div>
                <div class="options-itemTest">
                    <input id="second" checked type="radio" value="second" name="questions" class="options-inputTest">
                    <label for="second" class="options-labelTest"><span>Матрица</span></label>
                </div>
                <div class="options-itemTest">
                    <input id="third" checked type="radio" value="third" name="questions" class="options-inputTest">
                    <label for="third" class="options-labelTest"><span>Множество</span></label>
                </div>
                <div class="options-itemTest">
                    <input id="fourth" checked type="radio" value="fourth" name="questions" class="options-inputTest">
                    <label for="fourth" class="options-labelTest"><span>Последовательность</span></label>
                </div>
            </div>  
        </div>

        <div class="form-item">
            <label for="age" class="form-labelTest">Какое понятие не связано с суммой ряда? </label>
            <select id="age" name="age" class="selectTest">
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
