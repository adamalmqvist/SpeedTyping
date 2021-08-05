import {useState, useEffect} from 'react'

const useTypeKey = callback =>{
    const [keyTyped, setKeyTyped] = useState();
    useEffect(() => { 
        const downHandler = ({key}) => {
            if (keyTyped !== key && key.length === 1) {
                setKeyTyped(key);
                callback && callback(key);
            }

        };
    
    const upHandler = () => {
        setKeyTyped(null);
    };
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
        window.removeEventListener('keydown', downHandler)
        window.removeEventListener('keyup', upHandler);
    }
});
return keyTyped;
};

export default useTypeKey;