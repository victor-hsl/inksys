import { useState } from "react";

function useContextHeader(newTitle?: string, newSubtitle?: string) {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    if(newTitle){
        setTitle(newTitle);
    }
    if(newSubtitle){
        setSubtitle(newSubtitle);
    }
    
    return [title, subtitle];
}

export default useContextHeader;