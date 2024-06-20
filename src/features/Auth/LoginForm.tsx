import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="mx-auto w-full p-6 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl">로그인</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">비밀번호</Label>
              {/*<Link href="#" className="ml-auto inline-block text-sm underline">*/}
              {/*  Forgot your password?*/}
              {/*</Link>*/}
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            로그인
          </Button>
          <Button variant="outline" className="w-full">
            구글 로그인
          </Button>
        </div>
        {/*<div className="mt-4 text-center text-sm">*/}
        {/*  /!*Don&apos;t have an account?{" "}*!/*/}
        {/*  <Link href="#" className="underline">*/}
        {/*    Sign up*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </CardContent>
    </Card>
  );
}
