import React from "react";
import { useState } from "react";
const TabContent3 = (props) => {
  const [checked, setChecked] = useState(1);
  const toggleCheck1 = () => {
    setChecked(1);
  };
  const toggleCheck2 = () => {
    setChecked(2);
  };
  return (
    <div
      className={
        props.toggleState === 3
          ? "tab-pane fade show active"
          : "tab-pane fade show mt-n3"
      }
      id="gradske-search"
      role="tabpanel"
      aria-labelledby="gradske-search-tab"
    >
      <div class="d-lg-flex justify-content-lg-center col-12 p-0 mb-1 text-white text-md-dark">
        <div class="form-check d-flex justify-content-start justify-content-lg-center align-items-center col-12 col-lg-auto p-0 mx-1">
          <label class="checkbox-container">
            Pretraga po linijama
            <input
              type="radio"
              checked={checked === 1 ? "checked" : ""}
              onClick={toggleCheck1}
              name="nacinPretrage"
              id="pretragaPolinijama"
              value="0"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="form-check d-flex justify-content-start justify-content-lg-center align-items-center col-12 col-lg-auto p-0 mx-1">
          <label class="checkbox-container">
            Pretraga po početnoj i krajnjoj stanici
            <input
              type="radio"
              checked={checked === 2 ? "checked" : ""}
              onClick={toggleCheck2}
              name="nacinPretrage"
              id="pretragaPoStanicama"
              value="1"
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center align-items-center mb-1 w-100">
        <div class="col-12 col-lg-3 p-0 pb-2 mr-lg-2">
          <select
            className="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white rounded"
            name="mjesto"
            id="gradskeSelectGrad"
            onchange="gradskePretrageOptions(3)"
          >
            <option value="" selected>
              Za grad
            </option>
            <option value="SARAJEVO">Sarajevo</option>
            <option value="ZENICA">Zenica</option>
          </select>
        </div>
        <div
          class="d-none justify-content-lg-center col-12 col-lg-8 p-0 ml-lg-2"
          id="inputGradskihStanica"
        >
          <div class="mb-2 col-12 col-lg-6 p-0 mx-1">
            <input
              type="text"
              class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
              name="polaziste"
              id="polazisteGradske"
              placeholder="Od"
              required
            />
          </div>
          <div class="mb-2 col-12 col-lg-6 p-0 mx-1">
            <input
              type="text"
              class="form-control form-control-lg bg-light bg-md-primary text-dark text-md-white input-autocomplete w-100"
              name="odrediste"
              id="odredisteGradske"
              placeholder="Do"
              required
            />
          </div>
        </div>
        <div
          class="d-flex justify-content-center col-12 col-lg-6 p-0 mb-1 ml-lg-2"
          id="selectGradskihLinija"
        >
          <select class="custom-select custom-select-lg bg-light bg-md-primary text-dark text-md-white w-100">
            <option value="" selected>
              Odaberite liniju
            </option>
            <option>BOLNICA - KANAL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TabContent3;
