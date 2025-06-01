import Title from '../components/Title';
import YummiHairCollections from '../components/YummiHairCollections';
import './shop.css';

function Shop() {
    return(
        <div style={{ minHeight: '100vh', position: 'relative' }}>
              <Title name="Shop" cursiveName="essentials" />
              <div style={{ 
                    fontFamily: 'quicksand',
                    margin: '30px 20px 10px 20px',
                    color: 'white'
                }}>
                Shop my favorites and choose an item below to learn more—when you're ready to purchase, 
                you'll be redirected to where the product is sold. You can also browse all the products 
                I use and love directly <a href="https://shopmy.us/yummihair"  
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'white', fontWeight: '700'}}>here</a> or at <a href="https://shopmy.us/yummihair"  
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'white', fontWeight: '700'}}>https://shopmy.us/yummihair</a>.
              </div>
              <YummiHairCollections />
        </div>
    )
};

export default Shop;