import { selectorByAttributeValue, selectorByClassPrefix } from '../../utils/selectors'; 
import { selectorById} from '../../utils/selectors'


const selectors = { 
    firstName: selectorById("user_firstname"), 
    surName: selectorById("user_surname"), 
    phone: selectorById("user_phone"), 
    addressStreet: selectorById("user_address_attributes_street"),
    postCode: selectorById("user_address_attributes_street"),
    email: selectorById("user_user_detail_attributes_email"),
    password: selectorById("user_user_detail_attributes_password"),
    confirmPassword: selectorById("user_user_detail_attributes_password_confirmation"),
    createBtn: selectorByAttributeValue("input","name","submit")




}; 


class Register { 


    createUser(){ 

        cy.get(selectors.firstName).type("Ganesh2"),
        cy.get(selectors.surName).type("Ran2"),
        cy.get(selectors.phone).type("0456766544"),
        cy.get(selectors.addressStreet).type("39 Blackburn"),
        cy.get(selectors.postCode).type("2760"),
        cy.get(selectors.email).type("gans794@gmail.com"),
        cy.get(selectors.password).type("Gans5217"),
        cy.get(selectors.confirmPassword).type("Gans5217"),
        cy.get(selectors.createBtn).click()


    } 


} 

export default Register