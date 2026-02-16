
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [skills, setSkills] = useState("");
    const [agree, setAgree] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${name}, Email: ${email}`);
        fetch("http://localhost:8080/api/user/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: name,
                userEmail: email,
                userPhone: phone,
                userPassword: password,
                userAge: age,
                userGender: gender,
                userCity: city,
                userCountry: country,
                userSkills: skills
            })
        })
    }

    return (
        <div>

            <div className="formContainer">
                <h1 className="formHeading">Register Page</h1>
                <form onSubmit={handleSubmit} className="form">

                 
                    <label>Name:</label><br />
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br /><br />

                 
                    <label>Email:</label><br />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /><br />

            
                    <label>Phone:</label><br />
                    <input
                        type="text"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <br /><br />

            
                    <label>Password:</label><br />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /><br />

             
                    <label>Age:</label><br />
                    <input
                        type="number"
                        placeholder="Enter Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <br /><br />

               
                    <label>Gender:</label><br />
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Male

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                        
                    /> Female

                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={gender === "Other"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Other
                    <br /><br />

              
                    <label>City:</label><br />
                    <input
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br /><br />

                 
                    <label>Country:</label><br />
                    <input
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                    <br /><br />

                  
                    <label>Skills:</label><br />
                    <input
                        type="checkbox"
                        value="Java"
                        onChange={(e) => setSkills(e.target.value)}
                    /> Java

                    <input
                        type="checkbox"
                        value="Spring Boot"
                        onChange={(e) => setSkills(e.target.value)}
                        style={{ marginLeft: "15px" }}
                    /> Spring Boot

                    <input
                        type="checkbox"
                        value="React"
                        onChange={(e) => setSkills(e.target.value)}
                        style={{ marginLeft: "15px" }}
                    /> React
                    <br /><br />

                  
                    <label>
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        &nbsp;I agree to the Terms & Conditions
                    </label>

                    <br /><br />

                    <button className="search-btn" type="submit">
                        Register
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Register;