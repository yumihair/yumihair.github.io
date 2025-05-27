import Title from '../components/Title';
import YummiHairCollections from '../components/YummiHairCollections';
import './shop.css';

function Shop() {
    return(
        <div style={{ minHeight: '100vh', position: 'relative' }}>
              <Title name="Shop" cursiveName="hair" />
              <YummiHairCollections />
        </div>
    )
};

export default Shop;