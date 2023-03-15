import { selectorByAttributeValue, selectorByClassPrefix } from '../../utils/selectors'; 
import { selectorByAttribute } from '../../utils/selectors';
import { selectorById} from '../../utils/selectors'


const selectors = { 
    loginId: selectorById("email"), 
    loginPwd: selectorById("password"),
    loginBtn: selectorByAttributeValue("input","name","submit"),
    registerBtn: selectorByAttributeValue("a","href","register.php")

}; 


class Login { 

    visit(url) { 

        cy.visit(url) 

    } 

    loginEmailPwd(email, pwd){ 

        cy.get(selectors.loginId).type(email) 
        cy.get(selectors.loginPwd).type(pwd)
        cy.get(selectors.loginBtn).click()
        cy.contains("h2", "Broker Insurance WebPage")

    } 

    clickRegister(){ 

        cy.get(selectors.registerBtn).click()

    } 


    
     

} 

export default Login