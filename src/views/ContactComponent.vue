<template>
    <div class="contact">
        <h1 class="title">Контакты</h1>
        <form id="Contact-form" action="mailto:semenov.vualya@gmail.com" method="POST">
        <div class="form">
            <div class="form-item">
                <label for="FIO" class="form-label">Фамилия Имя Очевство </label>
                <input type="text" id="FIO" name="name" class="form-input" placeholder="Введите ФИО" pattern="^\S+\s\S+\s\S+$">
            </div>

            <div class="form-item">
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

            <div class="form-item">
                <label for="age" class="form-label">Возраст </label>
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
                <label for="email" class="form-label">E-mail </label>
                <input type="email" id="email" name="email" placeholder="Введите e-mail" class="form-input">
            </div>

            <div class="form-item">
                <label for="FIO" class="form-label">Номер телефона </label>
                <input type="text" id="Phone" class="form-input" placeholder="Введите номер телефона" pattern="^(?:\+7|\+3)\d{9,11}$">
            </div>

            <div class="buttons">
                <button type="submit" class="form-button">Отправить</button>
                <button type="reset" class="form-button">Очистить</button>
                
            </div>

        </div>
        </form>
    </div> 


</template>

    

<script src="../js/ContactComponent.js">
</script>