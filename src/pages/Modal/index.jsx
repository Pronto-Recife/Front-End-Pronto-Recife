
import {ModalBackground,Modalstyle} from "./styles";






export default function Modal({isOpem,children}) {
    
    
   if(isOpem){
    
    return(
        
        <ModalBackground>

            <Modalstyle>
                
                   {children}

            </Modalstyle>

        </ModalBackground>

    )
   }
   return null;
}