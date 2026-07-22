import { ShorterForm } from "./ShorterForm";
import { TexterForm } from "./TexterForm";
import { VideoForm } from "./VideoForm";

export function Workspace({currentForm}){

    function renderMainState(){
        switch (currentForm) {
            case 'texter':
                return (
                    <TexterForm />
                )
                
            case 'video':
                return (
                    <VideoForm/>
                )

            case 'short':
                return (
                    <ShorterForm />
                )
        
            default:
                return (
                    <TexterForm />
                )
        }
    }
    return (
        <div className="workspace">
            {renderMainState()}
        </div>
    )
};