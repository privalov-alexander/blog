# AtomNavigate

> Компонент может быть использован как интерактивный или навигационный элемент.

Компонент по дефолту является тегом `button`, при передаче в `props` атрибута `to` компонент
становится ссылкой стилизованной как кнопка.

## Использование

### Button

```html
<AtomNavigate @click="handleOpenModal"> Open modal </AtomNavigate>
```

```html
<form @submit.prevent="handleSubmitForm">
    ...
    <AtomNavigate type="submit"> Send form </AtomNavigate>
</form>
```

### Link

```html
<AtomNavigate to="/registration"> Регистрация </AtomNavigate>
```
