import { useEffect, useRef, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import axios from "axios";
import qs from "qs";
import Img from "./assets/Img/logo2.svg";
import ErrorBoundry from "./ErrorBoundry";
import RegSucc from "./RgSucc";

const Register = () => {
    const [isLoading, setIsloading] = useState(false);
    const input = useRef(null);

  const [dataObject, setDataObject] = useState(null);
  const [isStatus, setStatus] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Ghana");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [countryCode, setCountryCode] = useState("+235");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorArray, setErrorArray] = useState(null);

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

 

 

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };


  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };
  const handleCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  const handleClick = () => {
    setIsloading(true);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setDataObject({
      firstname: firstname,
      lastname: lastname,
      email: email,
      country: country,
      dateOfBirth: dateOfBirth,
      countryCode: countryCode,
      phoneNumber: phoneNumber,
    });
  };

  //handling the form data
  useEffect(() => {
    if (isStatus) {
      setDataObject(null);
    }

    if (dataObject !== null) {
      axios
        .post("https://alitqanonlineschool.rf.gd/index.php", qs.stringify(dataObject))
        .then((response) => {
          if (
            !Object.values(response?.data?.errors).some((value) =>
              Boolean(value)
            )
          ) {
            setStatus(true);
            setIsloading((prev) => !prev);
          } else {
            setIsloading((prev) => !prev);
            setStatus(false);
          }
          setErrorArray(response.data.errors);
          alert(response.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [dataObject]);

  return (
    <ErrorBoundry>
      {!isStatus && (
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-heading-box">
            <div className="form-heading-heading">
              <h1 className="form-heading montserrat">
                <img src={Img} alt="logo" width="70px" height="70px" /> Register
              </h1>
              <p className="form-desciption open-sans">
                Register to become a member of Al-Itqan
              </p>
            </div>
            <div className="personal-info-text montserrat">Personal Info</div>
          </div>

          <div className="form-fields">
            <PersonalInfo
              
              firstname={firstname}
              lastname={lastname}
              email={email}
              phoneNumber={phoneNumber}
              country={country}
              countryCode={countryCode}
              dateOfBirth={dateOfBirth}
              handleDateOfBirth={handleDateOfBirth}
              handleCountry={handleCountry}
              handlePhoneNumber={handlePhoneNumber}
              handleFirstName={handleFirstName}
              handleLastName={handleLastName}
              handleEmail={handleEmail}
              handleCountryCode={handleCountryCode}
              errorArray={errorArray}
            />
          </div>

          <div className="button-box">
            <input
              type="submit"
              name="submit"
              className="submit-button-1 montserrat"
              id="submit-button-two"
              value="Submit"
              ref={input}
              onClick={(e) => {
                  handleForm(e);
                  handleClick();
              }}
              disabled={isLoading}
            />
          </div>
        </form>
      )}
      {isStatus && (
        <RegSucc
          heading="Success!"
          body="You have Been Succesfully Registered As A Member. Check Your Email Now, For Verification."
        />
      )}
    </ErrorBoundry>
  );
};

export default Register;
