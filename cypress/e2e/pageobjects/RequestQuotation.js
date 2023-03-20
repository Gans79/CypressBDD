import { selectorByAttributeValue, selectorById } from '../../utils/selectors'; 


const selectors = { 
    requestQuotationTab: selectorById("ui-id-2"),
    incidents: selectorById("quotation_incidents"), 
    registration: selectorById("quotation_vehicle_attributes_registration"), 
    mileage: selectorById("quotation_vehicle_attributes_mileage"), 
    estimatedValue: selectorById("quotation_vehicle_attributes_value"), 
    coverDropDown: selectorById("quotation_breakdowncover"),
    calculatePremiumBtn: selectorByAttributeValue("Input","value","Calculate Premium"),
    saveQuotationBtn: selectorByAttributeValue("Input","value","Save Quotation"),

}; 


class RequestQuotation { 

    calculatePremium(){ 
        cy.get(selectors.requestQuotationTab).click(),
        cy.get(selectors.incidents).type("Accident"),
        cy.get(selectors.registration).type("DVT77B"),
        cy.get(selectors.mileage).type("50000"),
        cy.get(selectors.estimatedValue).type("30000"),
        cy.get(selectors.calculatePremiumBtn).click()
    } 

    clickQuotationTab(){
        cy.get(selectors.requestQuotationTab).click()
    }

    calculatePremiumCover(cover){
        cy.get(selectors.incidents).type("Accident"),
        cy.get(selectors.registration).type("DVT77B"),
        cy.get(selectors.mileage).type("50000"),
        cy.get(selectors.estimatedValue).type("30000")
       // cy.get(selectors.coverDropDown).click()
        cy.get(selectors.coverDropDown).select(cover)


    }

    
    saveQuotation(){ 
        cy.get(selectors.incidents).type("Accident"),
        cy.get(selectors.registration).type("DVT77B"),
        cy.get(selectors.mileage).type("50000"),
        cy.get(selectors.estimatedValue).type("30000"),
        cy.get(selectors.saveQuotationBtn).click()
    } 

} 

export default RequestQuotation