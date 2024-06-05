import { useState } from "react"

describe('Testeando la app en general', () => {
    it('Deveria renderizar la vista de dashboard', () => {
        cy.visit('/')

    })
    it('Deveria renderizar la vista de home', () => {
        cy.visit('/home')

    })
    it('Deveria renderizar la vista de settings con todos los usuarios', () => {
        cy.visit('/settings')

    })
    it('Deveria cambiar a dark mode', () => {
        cy.visit('/home')
        // Verifica que el botón de cambio de tema existe
        cy.get('[data-testid="toggle-theme"]').should('exist');

        //clic en el botón para cambiar el tema
        cy.get('[data-testid="toggle-theme"]').click();

        // Verifica que la clase "dark" se haya añadido al elemento html
        cy.get('html').should('have.class', 'dark');

        // Verifica que el tema se haya guardado en localStorage
        cy.window().then((window) => {
            expect(window.localStorage.getItem('theme')).to.equal('dark');
        });

        // Vuelve a hacer clic para cambiar el tema a claro
        cy.get('[data-testid="toggle-theme"]').click();

        // Verifica que la clase "dark" se haya eliminado del elemento html
        cy.get('html').should('not.have.class', 'dark');

        // Verifica que el tema se haya actualizado en localStorage
        cy.window().then((window) => {
            expect(window.localStorage.getItem('theme')).to.equal('light');
        });
    });




    it('Deveria renderizar el modal de crear user', () => {
        cy.visit('/settings')
        //Verifica que el modal no está visible antes de hacer clic
        cy.get('[data-testid="create-user-modal"]').should('not.exist');

        //clic en el botón de "Crear Customer"
        cy.get('button').contains('Create Customer').click();

        // Verifica que el modal está visible después de hacer clic
        cy.get('[data-testid="create-user-modal"]').should('be.visible');
    });
    it('Deveria renderizar el modal de editar user', () => {
        cy.visit('/settings')

        // Verifica que el modal no está visible antes de hacer clic
        cy.get('[data-testid="update-user-modal"]').should('not.exist');

        // Encuentra el primer botón de editar (puedes ajustar el selector según tu estructura HTML)
        cy.get('button').contains('Edit').first().click();

        // Verifica que el modal está visible después de hacer clic
        cy.get('[data-testid="update-user-modal"]').should('be.visible');
    });


    it('Deveria verificar que funciona el modal de eliminar usuario', () => {
        cy.visit('/settings')

        // Verifica que el modal no está visible antes de hacer clic
        cy.get('[data-testid="delete-user-modal"]').should('not.exist');

        // Encuentra el primer botón de eliminar (puedes ajustar el selector según tu estructura HTML)
        cy.get('button').contains('Delete').first().click();

        // Verifica que el modal está visible después de hacer clic
        cy.get('[data-testid="delete-user-modal"]').should('be.visible');
    })

    it('deveria verificar que el usuario fue eliminado', () => {
        cy.visit('/settings')

        // Verifica el número inicial de usuarios
        cy.get('.user-item').then(users => {
            const initialUserCount = users.length;

            // Encuentra el primer botón de eliminar y haz clic
            cy.get('button').contains('Delete').first().click();

            // Verifica que el modal está visible
            cy.get('[data-testid="delete-user-modal"]').should('be.visible');

            // Ocultar manualmente el overlay
            cy.get('.ReactModal__Overlay').invoke('css', 'display', 'none');

            // Haz clic en el botón de confirmación de eliminación dentro del modal
            cy.get('button').contains('Delete').click();

            // Espera a que la acción de eliminación se complete
            cy.wait(1000); // Ajusta este valor según sea necesario

            // Verifica que el número de usuarios ha disminuido en uno
            cy.get('.user-item').should('have.length', initialUserCount - 1);
        });
    });
})