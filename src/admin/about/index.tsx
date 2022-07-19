import { getDescription } from "../../data/About";
import { useState, useEffect } from 'react';

const About = () => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        const get = async () => {
            const response = await getDescription();
            if(response) {
                setDescription(response);
            }
        }
        try{
            get();
        } catch (e) {
            console.log(e);
        }
        return () => {
        };        
    }, []);

    return(
        <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)}>
        </textarea>
    )
}

export default About;