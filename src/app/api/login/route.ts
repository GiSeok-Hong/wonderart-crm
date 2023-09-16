import { signJwtAccessToken } from '../../../../lib/jwt';
import { prisma } from '../../../../lib/prisma';

type RequestBody = {
  username: string;
  password: string;
};

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.teacher.findFirst({
    where: {
      email: body.username,
    },
  });

  if (user) {
    if (user && body.password === user.password) {
      const { password, ...userWithoutPassword } = user;
      const accessToken = signJwtAccessToken(userWithoutPassword);
      const result = {
        ...userWithoutPassword,
        accessToken,
      };
      return new Response(JSON.stringify({ message: '로그인에 성공하였습니다.', success: true, status: 200, result }));
    }
    return new Response(
      JSON.stringify({ message: '비밀번호가 올바르지 않습니다.', success: false, status: 401, result: null }),
    );
  } else {
    return new Response(
      JSON.stringify({ message: '이메일 주소가 올바르지 않습니다.', success: false, status: 400, result: null }),
    );
  }
}
