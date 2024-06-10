import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Nicolas from './Nicolas';
import Celeste from './Celeste';
import '../Styles/cuerpo.css';
import '../Styles/Modal.css'
import NicolasDiaz from '../Img/nico.jpg';
import CelesteRodriguez from '../Img/Celeste.png';
import Titulo from '../Img/titulo.png'
import TituloMobile from '../Img/tituloMovil-fotor-bg-remover-202406101001.png'

const Cuerpo = () => {
  const [showBoxes, setShowBoxes] = useState(Array(6).fill(false));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(prevState => {
        const newState = [...prevState];
        newState[0] = true;
        return newState;
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []); // El temporizador inicial para la primera caja

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBoxes(prevState => {
        const newState = [...prevState];
        const nextIndex = newState.findIndex(box => box === false);
        if (nextIndex !== -1) {
          newState[nextIndex] = true;
        } else {
          clearInterval(interval);
        }
        return newState;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []); // El temporizador para las cajas restantes

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <a href="/" className="home-link">
            <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Home" className="home-icon" />
          </a>
        </div>
      </header>
      <div className="overlay"></div>
      <div className="container">
        <div className="left">
        <img src={Titulo} alt="titulo" className="desktop-image" />
        <img src={TituloMobile} alt="titulo-mobile" className="mobile-image" />
        </div>
        <div className="right">
          <div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Celeste />)}>
            <img src={CelesteRodriguez} alt="Persona 1" />
            <div className="info">Rodriguez Maria Celeste</div>
          </div>
          <div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Celeste />)}>
            <img src={CelesteRodriguez} alt="Persona 1" />
            <div className="info">Rodriguez Maria Celeste</div>
          </div>
          <div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Nicolas />)}>
            <img src={NicolasDiaz} alt="Persona 1" />
            <div className="info">Juan Nicolas Diaz</div>
          </div>
          <div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Nicolas />)}>
            <img src={NicolasDiaz} alt="Persona 1" />
            <div className="info">Juan Nicolas Diaz</div>
          </div><div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Nicolas />)}>
            <img src={NicolasDiaz} alt="Persona 1" />
            <div className="info">Juan Nicolas Diaz</div>
          </div><div className={`box ${showBoxes[0] ? 'show' : ''}`} onClick={() => openModal(<Nicolas />)}>
            <img src={NicolasDiaz} alt="Persona 1" />
            <div className="info">Juan Nicolas Diaz</div>
          </div>
          {/* Aquí irían las otras cajas */}
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Ingeniería & Sociedad.</p>
      </footer>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={modalIsOpen ? "Modal Modal--open" : "Modal"}
        overlayClassName={modalIsOpen ? "Overlay Overlay--open" : "Overlay"}
      >
        <button className="close-btn" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
        </button>
        {/* Contenido del modal */}
        <div className="modal-content">
          {modalContent && modalContent}
        </div>
      </Modal>
    </div>
  );
};

export default Cuerpo;
