import { RegulerButton as BackToHomeButton } from "../components/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="error-title-section">
        <h1>404 | Halaman Tidak Ditemukan</h1>
      </div>
      <div className="error-button-section">
        <BackToHomeButton initial="ke halaman utama" onStyle="back-button" onClick={() => navigate("/")} />
      </div>
      <style>
        {`
          .error-title-section {
            color: var(--input-dark-color)
          }
          .error-button-section {
            display: flex;
            justify-content: center

          }
        `}
      </style>
    </>
  );
};

export default Error;
