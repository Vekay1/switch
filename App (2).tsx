import React, { useRef, useState } from "react";

const ToggleSwitch: React.FC = () => {
  // Створюємо ref для перемикача
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOn, setIsOn] = useState(false); // Держимо стан перемикача в useState

  // Функція для перемикання стану
  const toggleSwitch = () => {
    setIsOn(!isOn); // Змінюємо стан

    // Міняємо стилі перемикача через ref
    if (toggleRef.current) {
      toggleRef.current.style.backgroundColor = isOn ? "#ccc" : "#4CAF50";
      toggleRef.current.style.justifyContent = isOn ? "flex-start" : "flex-end";
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Перемикач (Toggle Switch)</h1>
      <div
        ref={toggleRef}
        onClick={toggleSwitch}
        style={{
          width: "60px",
          height: "30px",
          backgroundColor: isOn ? "#4CAF50" : "#ccc",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: isOn ? "flex-end" : "flex-start",
          padding: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s, justify-content 0.3s",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "white",
            borderRadius: "50%",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
          }}
        ></div>
      </div>
      <p style={{ marginTop: "20px" }}>
        Стан: {isOn ? "Увімкнено" : "Вимкнено"}
      </p>
    </div>
  );
};

export default ToggleSwitch;
