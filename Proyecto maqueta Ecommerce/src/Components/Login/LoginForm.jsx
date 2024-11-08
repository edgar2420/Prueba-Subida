import React from "react";
//importar font awesome y fa-user
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function FormularioInicioSesion() {
  return (
    <div className="card mb-4 my-5 col-lg-4 col-sm-6 col-10">
      <div className="card-body">
        <h4 className="mb-4">Iniciar sesión</h4>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
          <div className="d-flex mb-3">
            <label className="form-check me-auto">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked
              />
              <span className="form-check-label"> Recordar </span>
            </label>
            <a href="#" className="text-decoration-none">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button className="btn btn-primary w-100" type="button">
            Iniciar sesión
          </button>
          <p className="text-divider my-4">o accede con</p>
          <a href="#" className="btn btn-light w-100">
            <img src="/images/google.svg" height="20" width="20" />
            <span className="ms-1 align-middle">Continuar con Google</span>
          </a>
          <p className="mb-0 mt-4 text-center">
            ¿No tienes una cuenta? <a href="#">Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  );
}
