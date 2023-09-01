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
    return new Response(JSON.stringify(userWithoutPassword));
  } else return new Response(JSON.stringify(null));
}
