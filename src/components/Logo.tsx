import '../assets/fonts/fonts.css'

function Logo() {
    return (
        <div style={{
            color: 'white', 
            lineHeight: 0.9, 
            fontSize: '6rem',
            textAlign: 'center',
            zIndex: '100'
            }}>
            <div style={{fontFamily: 'LeJourScript', textShadow: '4px 4px 2px #b26977'}}>yummi</div>
            <div style={{fontFamily: 'LeJourSerif', textShadow: '4px 4px 2px #d7a6a2'}}>HAIR</div>
            <div style={{marginBottom: '8%',
          fontFamily: 'quicksand',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: '800'
        }}>yummihair.com</div>
        </div>
    )
}

export default Logo;