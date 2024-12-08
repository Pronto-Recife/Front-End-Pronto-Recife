
import {ModalBackground,Modalstyle} from "./styles";

import Logo from "../../assets/logo.svg";

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