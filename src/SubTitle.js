import React, { useEffect, useRef } from 'react';
import './Title.css';

const SubTitle = ({ text }) => {
    const subTitleRef = useRef(null);

    useEffect(() => {
        const subTitle = subTitleRef.current;
        subTitle.style.fontSize = '5px';
        // subTitle.style.display = 'none';

        setTimeout(() => {
            subTitle.style.transition = 'font-size 0.5s ease-in-out';
            subTitle.style.fontSize = '40px';
        }, 100);
    }, []);

    return <h1 ref={subTitleRef} className="subTitle">{text}</h1>;
};

export default SubTitle;
