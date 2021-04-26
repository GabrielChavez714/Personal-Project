import './Info.css';

const Info = () => {
    return (
        <div className='Info'>
            <div className='info-box'></div>
            <header className='info-header'>Info</header>
            <div className='front-office-box'>
                <div className='fo-info'>
                    <div className='fo-header'>
                        <h2>Front Office</h2>
                    </div>
                    <div className='fo-container'>
                        <img src='https://www.steamboat-springs.com/assets/page_headers/Pioneer_Ridge_Building.jpg' alt='insert-img' />
                        <p className='contact-info'>1234 Snow Canyon Ln</p>
                        <p> Las Vegas, NV </p>
                        <p> 702-123-4567 </p>
                        <p>Frontoffice@snowcanyon.com</p>
                    </div>
                </div>
                <div className='basic-info'>
                    <img src='https://i.etsystatic.com/19466852/r/il/5a0630/1777723540/il_570xN.1777723540_jvca.jpg' alt='pin' />
                </div>
            </div>
        </div>      
    );
}

export default Info;