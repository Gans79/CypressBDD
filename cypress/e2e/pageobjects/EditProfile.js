import { selectorById} from '../../utils/selectors'


const selectors = { 
    editprofileTab: selectorById("ui-id-5"),



}; 


class EditProfile { 


    clickEditProfileTab(){ 

        cy.get(selectors.editprofileTab).click()

    } 
     

} 

export default EditProfile