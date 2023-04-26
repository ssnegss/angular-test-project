# AngularTestProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng serve --configuration=ru` for a RU dev server.

## Описание

Веб приложение c использованием [Angular](https://angular.io/docs) и [Router](https://angular.io/guide/router-reference), состоящее из двух страниц: редактор и просмотр элементов (каждая страница открывается по собственному url). Элемент состоит из наименования, даты создания, даты выполнения, описания.

На странице редактора реализовано:
1. Добавление элемента
   - 1. Добавление реализуется с помощью popup-окна, состоящего из полей:
     - 1. Название
     - 2. Описание
     - 3. Дата выполнения (Дата + Время)
   - 2. При создании элемента автоматически заполняется поле – Дата создания (Дата + Время)
2. Отображение таблицы с добавленными элементами для манипуляций с ними
3. Копирование элемента в таблице
4. Удаление элемента в таблице

На странице просмотра реализовано:
1. Отображение таблицы с добавленными элементами
2. Заголовки таблицы: наименование, дата и время создания, дата и время выполнения
3. Выпадающее меню у каждого элемента, предоставляющее возможность переместить элемент выше или ниже по списку
4. При нажатии на элемент открывается popup-окно по аналогии с пунктом 1.a блока выше только на просмотр полей

При верстке страниц использована библиотека [Taiga UI](https://taiga-ui.dev/)

** Так же реализовано:
* Валидация и отображение ошибок на полях формы создания
* Локализация интерфейса (русский, английский)
* В разделе просмотра реализована фильтрация по полям: Наименование, Дата выполнения с, Дата выполнения по
