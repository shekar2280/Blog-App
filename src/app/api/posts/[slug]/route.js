import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


// GET SINGLE POST
export const GET = async (req, {params}) => {

  const { slug } = params;
  
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: {increment: 1 }},
      include: {user: true},
    });
    
    

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();

    const newPost = await prisma.post.create({
      data: {
        title: body.title,
        desc: body.desc,
        slug: body.slug,
        img: body.img,
        views: 0,
        catSlug: body.catSlug,
        userEmail: body.userEmail,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
  }
};
