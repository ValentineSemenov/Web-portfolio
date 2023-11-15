<template>
    <div class="contact">
        <h1 class="title">Контакты</h1>
        <form action="mailto:semenov.vualya@gmail.com" method="POST">
        <div class="form">
            <div class="form-item">
                <label for="name" class="form-label">Фамилия Имя Отчество <span id="required">*</span></label>
                <input type="text" id="name" name="name" class="form-input" placeholder="Введите ФИО" pattern="^\S+\s\S+\s\S+$">
                <div class="error-message"></div>
            </div>


            <div class="form-item">
                <label class="form-label">Дата рождения<span id="required">*</span></label>
                <input type="text" id="date" name="date" placeholder="ДД.ММ.ГГ" readonly>
                <div class="error-message"></div>
                <div id="calendar">
                    <ul class="calendar-info">
                        <li class="year-name"></li>
                        <li class="month-name"></li>
                        <div class="input-calendar">
                            <select name="birth-year" id="birth-year"></select>
                            <select name="birth-month" id="birth-month"></select>
                        </div>
                    </ul>
                    <ul class="weekdays">
                        <li>Пн</li>
                        <li>Вт</li>
                        <li>Ср</li>
                        <li>Чт</li>
                        <li>Пт</li>
                        <li>Сб</li>
                        <li>Вс</li>
                    </ul>
                    <ul class="days">
                    </ul>
                </div>
            </div>


            
            <div class="form-item">
                <label for="age" class="form-label">Возраст <span id="required">*</span></label>
                <select id="age" name="age">
                    <option value="" disabled selected>Выберите возраст</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-65">46-65</option>
                    <option value="65+">65+</option>
                </select>
            </div>

            <div class="form-item">
                <label for="email" class="form-label">E-mail <span id="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="Введите e-mail" class="form-input">
                <div class="error-message"></div>
            </div>
            


            <div class="form-item">
                <label for="phone" class="form-label">Телефон <span id="required">*</span></label>
                <input for="phone" type="text" id="phone" class="form-input" placeholder="Введите номер телефона" pattern="^(?:\+7|\+3)\d{9,11}$">
                <div class="error-message"></div>
            </div>


            <div class="form-item">
                <label for="FIO" class="form-label">Пол <span id="required">*</span></label>
                <div class="options">
                    <div class="options-item">
                        <input id="male" checked type="radio" value="male" name="gender" class="options-input">
                        <label for="male" class="options-label"><span>Мужской</span></label>
                    </div>
                    <div class="options-item">
                        <input id="female" checked type="radio" value="female" name="gender" class="options-input">
                        <label for="female" class="options-label"><span>Женский</span></label>
                    </div>
                </div>  
            </div>


            <div class="buttons">
                <button type="submit" id="send" class="form-button">Отправить</button>
                <button type="reset" id="clear" class="form-button">Очистить</button>
                
            </div>

        </div>
        </form>
    </div> 


</template>

    

<script src="../js/ContactComponent.js">
</script>