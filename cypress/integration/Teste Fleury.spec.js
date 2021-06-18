/// <reference types="cypress" />


describe("Teste Fleury", () => {
    
    it("Acessar o site e clicar na opção Nossas Unidades", () => {

      cy.viewport(1366,766); // Altero a resolução da página para um formato melhor visualizado
      cy.visit("www.fleury.com.br/"); // Acesso o site
      cy.get(':nth-child(16) > #button-title-desktop-header > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').click({ force: true }); // Clico em Nossas Unidades

    });

    it("Selecionar duas facilidades e clicar em detalhes da unidade", () => {

      cy.viewport(1366,766);
      cy.get('.checkbox-selectcomponentstyle__CheckboxSelectPlaceholderStyled-sc-7ktrvg-2').click({ force: true }); // Clico para selecionar as facilidades      
      cy.get(':nth-child(4) > .fa-check-square').click({ force: true }); // Clico na facilidade Próximo ao metrô
      cy.get(':nth-child(5) > .fa-check-square').click({ force: true }); // Clico na facilidade Bicicletário e vaga verde 
      cy.get('#button-see-on-map-2-heitor-penteado > .buttoncomponentstyle__ButtonContentStyled-sc-11us3l0-3').click({ force: true }); // Entro em mais detalhes
   
    });

    it("Validação do nome da unidade", () => {

        cy.viewport(1366,766);
        cy.wait(4000);
        cy.get('.typographycomponentstyle__H1-sc-1oox73n-1').should('have.text', 'Heitor Penteado'); // Valido que o nome da unidade é o mesmo que apareceu na busca feita 
    
    });
   
});