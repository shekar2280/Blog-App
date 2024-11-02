import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 4;

  const skip = POST_PER_PAGE * (page - 1);

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: skip,
        where: cat ? { catSlug: cat } : {},
      }),
      prisma.post.count({
        where: cat ? { catSlug: cat } : {},
      }),
    ]);

    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (err) {
    console.error("Error details:", err); // more specific error log
    return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
  }
};



