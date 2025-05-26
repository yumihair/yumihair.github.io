import React from 'react';
import '../assets/fonts/fonts.css';

interface TitleProps {
    name: string;
    cursiveName: string;
}

const Title: React.FC<TitleProps> = ({ name, cursiveName }) => {
    return(
        <div>
            <div style={{
                fontFamily: 'LeJourSerif',
                textTransform: 'uppercase',
                fontSize: '3.8rem',
                color: 'white',
                margin: '5px 30% 5px 20px',
                lineHeight: '1'
            }}>{name}</div>
            <div style={{
                fontSize: '5rem',
                fontFamily: 'LeJourScript',
                color: 'white',
                margin: '-71px 100px 0px'
            }}>{cursiveName}</div>
            <div style={{
                marginTop: '0px',
                height: '2px',
                backgroundColor: '#fff',
                width: '80%',
            }} />
        </div>
    )
};

export default Title;

