import './Rodape.css';

const Rodape = () => {
    return (
        <div className='footer'>
            <div className='social__icons'>
                <a className='facebook__icon' href="facebook.com" target="_blank">
                    <img src='./imagens/fb.png' alt='Icone do Facebook' />
                </a>

                <a className='twitter__icon' href="twitter.com" target="_blank">
                    <img src='./imagens/tw.png' alt='Icone do Twitter' />
                </a>
                <a className='instagram__icon' href="instagram.com" target="_blank">
                    <img src='./imagens/ig.png' alt='Icone do Instagram' />
                </a>
            </div>
            <div className='rodape__logo'>
                <img src='./imagens/logo.png' alt='Logo' />
            </div>
            <div className='rodape__dev'>
                <span>Desenvolvido por: Rodrigo Duarte</span>
            </div>

        </div >
    );
}

export default Rodape;