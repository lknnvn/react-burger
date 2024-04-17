import {
    baseUrl,
    ingredientSelector,
    ingredientNameSelector,
    closeModalSelector,
    constructorSelector,
    orderSubmitSelector,
    emailInputSelector,
    passwordInputSelector,
    authorizeSubmitSelector
} from "../support/constants";

describe('Осуществление заказа пользователем через конструктор бургера', () => {
    it('Проверка работоспособности', () => {
        // Перейти на страницу
        cy.visit(baseUrl);
        cy.viewport(1440, 900);

        // Прочитать информацию о булке
        cy.get(ingredientSelector + ':eq(0)').click();
        cy.get(ingredientNameSelector).should('not.be.empty');
        cy.get(closeModalSelector).click();

        // Собрать бургер
        cy.get(ingredientSelector + ':eq(0)').trigger('dragstart');
        cy.get(constructorSelector).trigger('drop');
        cy.get(ingredientSelector + ':eq(3)').trigger('dragstart');
        cy.get(constructorSelector).trigger('drop');
        cy.get(ingredientSelector + ':eq(5)').trigger('dragstart');
        cy.get(constructorSelector).trigger('drop');

        // Сделать заказ
        cy.get(orderSubmitSelector).click();

        // Авторизоваться
        cy.get(emailInputSelector).type('chuvak@ya.ru');
        cy.get(passwordInputSelector).type('chuv23!@');
        cy.get(authorizeSubmitSelector).click();

        // Сделать заказ
        cy.get(orderSubmitSelector).click();
        cy.wait(20000);
        cy.get(closeModalSelector).click();
    });
});