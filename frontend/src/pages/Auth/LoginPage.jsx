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
const LoginPage = () => {
  return (
    <div className="flex h-screen justify-center items-center w-[100%]">
      <Globe />
      <div className="relative h-[95vh] w-full">
        <Particles className="absolute inset-0 z-0" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Card className="relative w-[350px] overflow-hidden z-50">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="username">Email</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Signup</Button>
              <Button>Signin</Button>
            </CardFooter>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
