import "./form.css";
import axios from "axios";
const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    const form = e.target;
    const formData = {
      email: form.email.value,
      name: form.name.value,
      gender: form.gender.value,
      password: form.password.value,
      city: form.city.value,
    };

    await axios({
      url: "https://node-auth-jwt-w78c.onrender.com/signup",
      method: "POST",
      data: formData,
    })
      .then((response) => {})
      .catch((err) => {
        console.log("Some error", err);
      });
  };
  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter Email" name="email" />
        <input type="text" placeholder="Enter the Name" name="name" />
        <label>
          Male:
          <input type="radio" name="gender" value="MALE" />
        </label>
        <label>
          Female:
          <input type="radio" name="gender" value="FEMALE" />
        </label>
        <label>
          Others:
          <input type="radio" name="gender" value="OTHERS" />
        </label>
        <input type="password" placeholder="Enter Password" name="password" />
        <input type="text" placeholder="enter city" name="city" />
        <button>Submit Details</button>
      </form>
    </>
  );
};
export default SignUp;
