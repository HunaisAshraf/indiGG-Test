import React from "react";

const Footer = () => {
  return (
    <>
    <div className="footer text-center mt-5">
      <h1
        style={{
          backgroundColor: "#181818",
          color: "white",
          marginBottom: "0",
          textAlign: "center",
        }}
      >
        TORMET
      </h1>
      <div style={{ backgroundColor: "#181818",
          color: "white",display:"flex",justifyContent:'center'}} className="link">
        <h5>About | </h5>
        <h5>Contact | </h5>
        <h5>Terms & policy </h5>
      </div>
</div>
    </>
  );
};

export default Footer;
