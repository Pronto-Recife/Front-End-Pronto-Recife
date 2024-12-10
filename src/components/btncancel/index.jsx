import {ModalBackground,Modalstyle} from "./styles";

export default function Btncancel({isOpem,children}) {
    
    
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