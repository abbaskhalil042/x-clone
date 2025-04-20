import React, { useContext } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { BorderBeam } from "../../components/magicui/border-beam";
import { Particles } from "../../components/magicui/particles";
import { Globe } from "../../components/magicui/globe";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginContext } from "@/context/Login";

const LoginPage = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const { setLoginToken, setUser } = useContext(LoginContext);
  const navigation = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post("http://localhost:5000/api/auth/login", formData);
    },
  });

  console.log(mutation.data?.data?.username)

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  // ✅ Handle login success with useEffect
  React.useEffect(() => {
    if (mutation.isSuccess) {
      const token = mutation.data?.data?.token;
      const user = mutation.data?.data?.username;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("username", JSON.stringify(user));
        setLoginToken(token); // this triggers App rerender with new routes
        setUser(user);

        navigation("/");
      }
    }
  }, [mutation.isSuccess, mutation.data, navigation]);

  // ✅ Show loading spinner
  if (mutation.isPending) {
    return (
      <div className="h-screen flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-loader animate-spin"
        >
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-screen justify-center items-center w-full">
      <Globe />
      <div className="relative h-[95vh] w-full">
        <Particles className="absolute inset-0 z-0" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Card className="relative w-[350px] overflow-hidden z-50 bg-[#00129]">
            <CardHeader>
              <CardTitle className="text-2xl lg:text-black">Login</CardTitle>
              <CardDescription className="text-black">
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">UserName</Label>
                    <Input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={onChangeHandle}
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      value={formData.password}
                      onChange={onChangeHandle}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  {/* ✅ Show error message */}
                  {mutation.isError && (
                    <p className="text-red-500 text-sm">
                      Login failed. Please check your credentials.
                    </p>
                  )}
                </div>

                <CardFooter className="flex justify-between mt-10">
                  <Link to="/signup">
                    <Button className="cursor-pointer" variant="outline">
                      Register
                    </Button>
                  </Link>
                  <Button className="cursor-pointer" type="submit">
                    Login
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
