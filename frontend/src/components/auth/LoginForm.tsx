import { auth } from "@/lib/auth";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function LoginForm() {
  return (
    <div>
      <form onSubmit={auth.login}>
        <Label htmlFor="email">Your Email</Label>
        <Input
          name="email"
          type="text"
          required
          placeholder="Enter your email in here"
        />

        <Label htmlFor="password">Your Password</Label>
        <Input
          type="password"
          name="password"
          required
          placeholder="Enter your password in here"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
