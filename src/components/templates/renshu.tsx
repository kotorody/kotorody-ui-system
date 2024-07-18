import React from "react";

const AitoLandingPage = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "807px",
            height: "70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "256px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "160px",
                height: "45px",
              }}
            >
              <img width="100%" height="100%" src="./images/aito-logo.webp" />
            </div>
          </div>
          <div
            style={{
              width: "551px",
              height: "20px",
              display: "flex",
              alignItems: "end",
              marginTop: "17px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AitoLandingPage;
