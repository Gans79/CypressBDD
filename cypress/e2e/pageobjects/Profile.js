import { selectorById} from '../../utils/selectors'


const selectors = { 
    profileTab: selectorById("ui-id-4"),



}; 


class Profile { 


    clickProfileTab(){ 

        cy.get(selectors.profileTab).click()

    } 
     

} 

export default Profile