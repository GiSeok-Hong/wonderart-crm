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

  if (user && body.password === user.password) {
    const { password, ...userWithoutPassword } = user;
    const accessToken = signJwtAccessToken(userWithoutPassword);
    const result = {
      ...userWithoutPassword,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
