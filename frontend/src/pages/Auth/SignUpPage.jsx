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
import { SplinePointer } from "lucide-react";
import { BiErrorCircle, BiSolidUniversalAccess } from "react-icons/bi";
const SignUpPage = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios.post("http://localhost:5000/api/auth/signup", formData);
    },
  });

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.fullName
    ) {
      alert("Please fill all required fields!");
      return;
    }
    mutation.mutate(formData);
  };

  console.log(formData);

  // // Render states
  // if (mutation.isPending) return <SplinePointer />;
  // if (mutation.error) return <BiErrorCircle message={mutation.error.message} />;
  // if (mutation.isSuccess)
  // return <BiSolidUniversalAccess message="Signup successful!" />;

  if (mutation.isSuccess) {
    setTimeout(() => {
      navigation("/login");
    }, 2000);
  }

  return (
    <div className="flex h-screen justify-center items-center w-[100%]">
      <Globe />
      <div className="relative h-[95vh] w-full">
        <Particles className="absolute inset-0 z-0" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Card className="relative w-[350px] overflow-hidden z-50 bg-[#00129] ">
            <CardHeader>
              <CardTitle className="text-2xl text-white lg:text-black">
                SignUp
              </CardTitle>
              <CardDescription className="lg:text-black">
                Enter your details to create your new account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">UserName</Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={onChangeHandle}
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="fullname">FullName</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={onChangeHandle}
                      placeholder="Enter your fullname"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="text"
                      value={formData.email}
                      onChange={onChangeHandle}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={onChangeHandle}
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <CardFooter className="flex justify-between mt-10">
                  <Link to={"/login"}>
                    <Button className="cursor-pointer" variant="outline">
                      Login
                    </Button>
                  </Link>
                  <Button type="submit" className="cursor-pointer">
                    Register
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

export default SignUpPage;
