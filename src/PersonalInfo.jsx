import Error from "./Error";

const PersonalInfo = (props) => {
// console.log(props.errorArray)
    return (

        <div>
            <div className="form-split-container">
                <div>
                    <div className="form-section">
                        <label htmlFor="firstname" className="montserrat">First Name</label>
                        <input type="text" name="firstname" className="text-fields" value={props.firstname} onChange={(e) => props.handleFirstName(e)} id="firstname" placeholder="e.g-AbdulRahman"  />
                        <Error error={props.errorArray == null ? '':  props.errorArray.firstname} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="lastname" className="montserrat">Last Name</label>
                        <input type="text" name="lastname" className="text-fields" value={props.lastname} onChange={(e) => props.handleLastName(e)} id="lastname" placeholder="e.g-Qosim"  />
                        <Error error={props.errorArray == null ? '':  props.errorArray.lastname} />
                    </div>
                    <div className="form-section">
                        <label htmlFor="dateOfBirth" className="montserrat">Date of Birth</label>
                        <input type="date" name="dateOfBirth" id="data-of-birth" value={props.dateOfBirth} onChange={(e) => props.handleDateOfBirth(e)}  />
                        <Error error={props.errorArray == null ? '':  props.errorArray.date_of_birth} />
                    </div>
                </div>

                
                <div>
                    <div className="form-section">
                        <label htmlFor="email" className="montserrat">Email</label>
                        <input type="email" name="email" id="email" placeholder="e.g-example@gmail.com" value={props.email} onChange={(e) => props.handleEmail(e)}  />
                        <Error error={props.errorArray == null ? '':  props.errorArray.email} />
                    </div>
                    <div className="number-div form-section" id="number-div-id">

                        <label htmlFor="phoneNumber" className="montserrat">Phone Number</label>
                        <div className="number-inner-box">
                            <select name="countryCode" id="country-code" value={props.countryCode} onChange={(e) => props.handleCountryCode(e)} >
                                <option value="+234">Nigeria (NIG)</option>
                                <option value="+235">Ghana (GHANA)</option>
                                <option value="+221">Senegal (SEN)</option>
                                <option value="+228">Togo (TOGO)</option>
                                <option value="+233">Ghana (GHA)</option>
                                <option value="+254">Kenya (KEN)</option>
                                <option value="+250">Rwanda (RWA)</option>
                                <option value="+251">Ethiopia (ETH)</option>
                                <option value="+27">South Africa (ZAF)</option>
                                <option value="+256">Uganda (UGA)</option>
                                <option value="+260">Zambia (ZMB)</option>
                                <option value="+263">Zimbabwe (ZWE)</option>
                                <option value="+232">Sierra Leone (SLE)</option>
                                <option value="+211">South Sudan (SSD)</option>
                                <option value="+20">Egypt (EGY)</option>
                                <option value="+212">Morocco (MAR)</option>
                                <option value="+222">Mauritania (MRT)</option>
                                <option value="+243">Democratic Republic of the Congo (COD)</option>
                                <option value="+225">Ivory Coast (CIV)</option>
                                <option value="+256">Uganda (UGA)</option>
                                <option value="+261">Madagascar (MDG)</option>
                                <option value="+246">British Indian Ocean Territory (IOT)</option>
                                <option value="+256">Burundi (BDI)</option>
                                <option value="+229">Benin (BEN)</option>
                                <option value="+258">Mozambique (MOZ)</option>
                                <option value="+234">Nigeria (NGA)</option>
                                <option value="+268">Eswatini (SWZ)</option>

                            </select>
                            <input type="tel" name="phoneNumber" id="number-field"  value={props.phoneNumber} onChange={(e) => props.handlePhoneNumber(e)} placeholder="e.g 08012345678" />

                        </div>
                        <div className="error-box">
                        <Error error={props.errorArray == null ? '':  props.errorArray.number} />
                        </div>
                        <div className="form-section">

                            <label htmlFor="country" className="montserrat">Country</label>
                            <select name="country" id="country" value={props.country} onChange={(e) => props.handleCountry(e)} >
                                <option value="Nigeria">Nigeria (NIG)</option>
                                <option value="Ghana">Ghana (GHA)</option>
                                <option value="Senegal">Senegal (SEN)</option>
                                <option value="Togo">Togo (TOGO)</option>
                                <option value="Kenya">Kenya (KEN)</option>
                                <option value="Rwanda">Rwanda (RWA)</option>
                                <option value="Ethiopia">Ethiopia (ETH)</option>
                                <option value="South Africa">South Africa (ZAF)</option>
                                <option value="Uganda">Uganda (UGA)</option>
                                <option value="Zambia">Zambia (ZMB)</option>
                                <option value="Zimbabwe">Zimbabwe (ZWE)</option>
                                <option value="Sierra Leone">Sierra Leone (SLE)</option>
                                <option value="South Sudan">South Sudan (SSD)</option>
                                <option value="Egypt">Egypt (EGY)</option>
                                <option value="Morocco">Morocco (MAR)</option>
                                <option value="Mauritania">Mauritania (MRT)</option>
                                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo (COD)</option>
                                <option value="Ivory Coast">Ivory Coast (CIV)</option>
                                <option value="Madagascar">Madagascar (MDG)</option>
                                <option value="Burundi">Burundi (BDI)</option>
                                <option value="Benin">Benin (BEN)</option>
                                <option value="Mozambique">Mozambique (MOZ)</option>
                                <option value="Eswatini">Eswatini (SWZ)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;