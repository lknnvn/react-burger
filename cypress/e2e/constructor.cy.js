describe('Осуществление заказа пользователем через конструктор бургера', () => {
    it('Проверка работоспособности', () => {
        // Перейти на страницу
        cy.visit('http://localhost:3000');
        cy.viewport(1440, 900);

        // Прочитать информацию о булке
        cy.get('[data-cy="ingredient"]' + ':eq(0)').click();
        cy.get('[data-cy="ingredient-name"]').should('not.be.empty');
        cy.get('[data-cy="close-modal"]').click();

        // Собрать бургер
        cy.get('[data-cy="ingredient"]' + ':eq(0)').trigger('dragstart');
        cy.get('[data-cy="constructor"]').trigger('drop');
        cy.get('[data-cy="ingredient"]' + ':eq(3)').trigger('dragstart');
        cy.get('[data-cy="constructor"]').trigger('drop');
        cy.get('[data-cy="ingredient"]' + ':eq(5)').trigger('dragstart');
        cy.get('[data-cy="constructor"]').trigger('drop');

        // Сделать заказ
        cy.get('[data-cy="order-submit"]').click();

        // Авторизоваться
        cy.get('[data-cy="email-input"]').type('chuvak@ya.ru');
        cy.get('[data-cy="password-input"]').type('chuv23!@');
        cy.get('[data-cy="authorize-submit"]').click();

        // Сделать заказ
        cy.get('[data-cy="order-submit"]').click();
        cy.wait(20000);
        cy.get('[data-cy="close-modal"]').click();
    });
});
