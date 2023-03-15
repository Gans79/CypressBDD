import { selectorByAttributeValue } from '../../utils/selectors'; 

const selectors = { 
 
    logoutBtn: selectorByAttributeValue("input","value","Log out"),


}; 


class Home { 

   validateHomePage(){
       cy.contains("h2","Broker Insurance WebPage")
   }

   logout(){
       cy.get(selectors.logoutBtn).click()

   }
     
} 

export default Home 