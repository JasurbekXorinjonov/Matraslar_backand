import { useRef } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Typography, Button, Container, Card, TextField } from "@mui/material";

function Login({ data }) {
  const { token, setToken } = data;
  const userName = useRef("");
  const userParol = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    let obj = {
      userName: userName.current.value,
      password: userParol.current.value,
    };
    fetch("http://localhost:1212/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
        }
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form w-50 m-auto mt-5 p-4 rounded border">
        <h3 className="text-center mb-5">Kirisk</h3>
        <input ref={userName} className="form-control mb-3" type="text" placeholder="Login" />
        <input ref={userParol} className="form-control mb-3" type="text" placeholder="parol" />
        <button className="btn btn-info mb-3 w-100">Kirish</button>
      </form>
    </div>
    // <Container maxWidth="xs">
    //   <Card style={{ marginTop: "100px", padding: "20px" }}>
    //     <FormControl onSubmit={handleSubmit}>
    //       <FormLabel>
    //         <Typography
    //           style={{ textAlign: "center", padding: "30px" }}
    //           variant="h5"
    //           color="initial">
    //           Kirish
    //         </Typography>
    //         <TextField
    //           ref={userName}
    //           style={{ marginBottom: "15px" }}
    //           id="login"
    //           label="Login"
    //           variant="outlined"
    //         />
    //         <TextField
    //           ref={userParol}
    //           id="parol"
    //           type="password"
    //           label="Parol"
    //           variant="outlined"
    //         />
    //       </FormLabel>
    //       <Button variant="text" color="secondary">
    //         Kirish
    //       </Button>
    //     </FormControl>
    //   </Card>
    // </Container>
  );
}

export default Login;
