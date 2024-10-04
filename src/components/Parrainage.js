import React from "react";
import parrainage from '../images/parrainage.jpg'
import '../styles/Parrainage.css'

export default function Parrainage() {

  const copyToClipboard = () => {
    const copyText = document.getElementById("parrainage-url");
    navigator.clipboard.writeText(copyText.value);
    alert("Lien copié !");
  };

  return (
    <div className="container">
      <div className="card mb-3 position-relative">
        {/* Remplacez cette ligne par un chemin valide pour l'image */}
        <img src={parrainage} className="card-img-top w-100" alt="parrainage" />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center fs-4">
          <p className="card-title text-center display-1">15€ offert !</p>
          <p className="card-text text-center">En invitant vos proches avec votre lien de parrainage*</p>
        </div>
      </div>

      <div className="card-body col-6 mx-auto">
        <div className="input-group mb-3">
          <label htmlFor="parrainage-url" className="px-2 fs-5">Lien de parrainage</label>
          <input id="parrainage-url" type="text" className="form-control" value="Lien de parrainage/xxx" readOnly />
          <button className="btn bouton" onClick={copyToClipboard}>Copier</button>
        </div>
      </div>

      <h3 className="text-center fw-bold mt-5 mb-5">Comment ça marche?</h3>
      <div className="row row-cols-lg-3 text-center mb-5" style= {{ backgroundColor: '##f4f9fe'}}>
        <div className="col">
          <i className="bi bi-send icon-parrainage fs-3"></i><br />
          <span className="fw-bold">Rien de plus facile</span><br />Envoyez votre lien de parrainage à votre ami pour une expertise. <br />C'est parti !
        </div>
        <div className="col">
          <i className="bi bi-eyeglasses icon-parrainage fs-3"></i><br />
          <p><span className="fw-bold">Nous expertisons votre ami</span><br />grâce à votre lien de parrainage. <br />Bien joué !</p>
        </div>
        <div className="col">
          <i className="bi bi-cash-coin icon-parrainage fs-3"></i><br />
          <p><span className="fw-bold">Vous gagnez 15€* </span><br />pour chaque parrainé(e) expertisé(e) *. <br />Facile !</p>
        </div>
      </div>
    </div>
  );
}
