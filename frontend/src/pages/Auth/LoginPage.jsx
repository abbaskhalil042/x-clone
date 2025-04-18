import React from "react";
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
const LoginPage = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const navigation = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post("http://localhost:5000/api/auth/login", formData);
    },
  });

  // console.log("data after login:-", mutation.data?.data?.token);
  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(formData);
  };

  if (mutation.isPaused) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-loader-icon lucide-loader animate-spin"
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
    );
  }

  if (mutation.isSuccess) {
    setTimeout(() => {
      localStorage.setItem("token", mutation.data?.data?.token);
      navigation("/home");
    }, 3000);
  }
  return (
    <div className="flex h-screen justify-center border-none items-center w-[100%]">
      <Globe />
      <div className="relative h-[95vh] w-full">
        <Particles className="absolute inset-0 z-0" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Card className="relative w-[350px] overflow-hidden z-50 bg-[#00129]">
            <CardHeader>
              <CardTitle className="text-2xl  lg:text-black">Login</CardTitle>
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
                </div>
                <CardFooter className="flex justify-between mt-10">
                  <Link to="/signup">
                    <Button className="cursor-pointer" variant="outline">
                      Register
                    </Button>
                  </Link>
                  <Button className="cursor-pointer">Login</Button>
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
