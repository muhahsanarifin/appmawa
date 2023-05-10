import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

import jumlah_mahasiswa from "../utils/data";

import styles from "../styles/Input.module.css";
import { SaveButton, RegulerButton as GoToResultButton } from "./Button";

export const RegulerInput: React.FC = () => {
  const navigate = useNavigate();
  const status = useSelector((state: RootState) => state.nilai);

  const [penilianPertama, setPenilianPertama] = useState<object>({
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: "",
  });

  const [penilainKeDua, setPenilianKeDua] = useState<object>({
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: "",
  });

  const [penilaianKeTiga, setPenilainKeTiga] = useState<object>({
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: "",
  });

  const [penilaianKeEmpat, setPenilaianKeEmpat] = useState<object>({
    mahasiswa_1: "",
    mahasiswa_2: "",
    mahasiswa_3: "",
    mahasiswa_4: "",
    mahasiswa_5: "",
    mahasiswa_6: "",
    mahasiswa_7: "",
    mahasiswa_8: "",
    mahasiswa_9: "",
    mahasiswa_10: "",
  });

  const handleInputPenilaianPertama = (e: any) => {
    const { name, value } = e.target;
    setPenilianPertama({ ...penilianPertama, [name]: Number(value) });
  };

  const handleInputPenilaianKeDua = (e: any) => {
    const { name, value } = e.target;
    setPenilianKeDua({ ...penilianPertama, [name]: Number(value) });
  };

  const handleInputPenilaianKetiga = (e: any) => {
    const { name, value } = e.target;
    setPenilainKeTiga({ ...penilaianKeTiga, [name]: Number(value) });
  };

  const handlePenilaianKeEmpat = (e: any) => {
    const { name, value } = e.target;
    setPenilaianKeEmpat({ ...penilaianKeEmpat, [name]: Number(value) });
  };

  const checkedInput = (nilai: any) => {
    const arrOfOBj = Object.values(nilai);

    const isNotStringEmpty = (el: any) => el !== "";

    return arrOfOBj.some(isNotStringEmpty);
  };

  return (
    <>
      <div className={styles["lists-section"]}>
        <ul className={styles["lists"]}>
          {/* Identity list */}
          <li className={styles["identity-list"]}>
            <div className={styles["identity-label"]}></div>
            <div className={styles["identity-wrapper-select"]}>
              <div className={styles["identity-select"]}>
                <label htmlFor="" className={styles["identity-label-select"]}>
                  Aspek Penialian 1
                </label>
              </div>
              <div className={styles["identity-select"]}>
                <label htmlFor="" className={styles["identity-label-select"]}>
                  Aspek Penialian 2
                </label>
              </div>
              <div className={styles["identity-select"]}>
                <label htmlFor="" className={styles["identity-label-select"]}>
                  Aspek Penialian 3
                </label>
              </div>
              <div className={styles["identity-select"]}>
                <label htmlFor="" className={styles["identity-label-select"]}>
                  Aspek Penialian 4
                </label>
              </div>
            </div>
          </li>
          {jumlah_mahasiswa.map((mahasiswa, idx) => (
            <li className={styles["list"]} key={idx}>
              <label htmlFor="" className={styles["label"]}>
                <Icon
                  icon="carbon:user-avatar-filled"
                  color="#EEEEEE"
                  width={32}
                  height={32}
                />
                <p className={styles["label-title"]}>{mahasiswa.name}</p>
              </label>
              <div className={styles["wrapper-select"]}>
                <div className={styles["select"]}>
                  <select
                    name={`mahasiswa_${mahasiswa.id}`}
                    id={`${mahasiswa.id}`}
                    className={styles["select-list"]}
                    onChange={handleInputPenilaianPertama}
                  >
                    <option
                      style={{
                        fontWeight: 800,
                        fontSize: "14px",
                        display: "none",
                      }}
                    >
                      Pilih nilai :
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className={styles["select"]}>
                  <select
                    name={`mahasiswa_${mahasiswa.id}`}
                    id={`${mahasiswa.id}`}
                    className={styles["select-list"]}
                    onChange={handleInputPenilaianKeDua}
                  >
                    <option
                      style={{
                        fontWeight: 800,
                        fontSize: "14px",
                        display: "none",
                      }}
                    >
                      Pilih nilai :
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div className={styles["select"]}>
                  <select
                    name={`mahasiswa_${mahasiswa.id}`}
                    id={`${mahasiswa.id}`}
                    className={styles["select-list"]}
                    onChange={handleInputPenilaianKetiga}
                  >
                    <option
                      style={{
                        fontWeight: 800,
                        fontSize: "14px",
                        display: "none",
                      }}
                    >
                      Pilih nilai :
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div
                  className={styles["select"]}
                  onChange={handlePenilaianKeEmpat}
                >
                  <select
                    name={`mahasiswa_${mahasiswa.id}`}
                    id={`${mahasiswa.id}`}
                    className={styles["select-list"]}
                  >
                    <option
                      style={{
                        fontWeight: 800,
                        fontSize: "14px",
                        display: "none",
                      }}
                    >
                      Pilih nilai :
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles["button-section"]}>
        {status?.isFulfilled && (
          <GoToResultButton
            initial="Go to Result"
            onClick={() => navigate("/hasil/nilai")}
            onStyle="result-button"
          />
        )}
        <SaveButton
          initial="Simpan"
          onBody={{
            aspek_penilaian_1: penilianPertama,
            aspek_penilaian_2: penilainKeDua,
            aspek_penilaian_3: penilaianKeTiga,
            aspek_penilaian_4: penilaianKeEmpat,
          }}
          onAction={
            checkedInput(penilianPertama) ||
            checkedInput(penilainKeDua) ||
            checkedInput(penilaianKeTiga) ||
            checkedInput(penilaianKeEmpat)
          }
        />
      </div>
    </>
  );
};
