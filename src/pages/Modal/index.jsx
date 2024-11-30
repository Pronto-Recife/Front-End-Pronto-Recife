
import {ModalBackground,Modalstyle} from "./styles";

import Logo from "../../assets/Default/logo.svg";

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