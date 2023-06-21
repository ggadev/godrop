import {useEffect, useState} from 'react';

function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return function() {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return scrollY;
}

export default useScrollPosition;