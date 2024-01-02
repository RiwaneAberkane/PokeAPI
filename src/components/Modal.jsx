import { useReactFavorisContext } from '../context/FavorisContext';
import './Modal.css'


function Modal({ show, handleClose, initialValues }) {
    const { remove } = useReactFavorisContext();

    if (!show) return null;
    return (
        <div className="modal">
            <section className="modal-main">
                <button className="close-btn" type="button" onClick={() => handleClose()}>X</button>
                <h3 className='sureRemove'>Do you want to remove ?</h3>
                <div className="button">
                    <button type="submit" onClick={() => { remove(initialValues.restaurantData); handleClose() }}>YES</button>
                    <button onClick={() => handleClose()}>NO</button>
                </div>
            </section>
        </div>
    )
}

export default Modal