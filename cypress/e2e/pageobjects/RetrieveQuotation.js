import { selectorByAttributeValue, selectorById } from '../../utils/selectors'; 

const selectors = { 
    retrieveQuotationTab: selectorById("ui-id-3"),
    idNumber: selectorByAttributeValue("Input","placeholder","identification number"),
    retrieveBtn: selectorByAttributeValue("Input","value","Retrieve"),


}; 


class RetrieveQuotation { 

   retrieveId(idnumber){
       cy.get(selectors.idNumber).type(idnumber)
       cy.get(selectors.retrieveBtn).click()
       cy.contains("Retrieve Quotation")
   }

   clickQuotationTab(){
    cy.get(selectors.retrieveQuotationTab).click()
}
     

} 

export default RetrieveQuotation 