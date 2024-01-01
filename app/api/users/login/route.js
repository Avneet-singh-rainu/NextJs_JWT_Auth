import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/libs/db";
import model from "@/app/models/model";
import jwt from "jsonwebtoken";

export async function POST(NextRequest) {
  await connectDB();
  const body = await NextRequest.json();
  const { uname, password } = body;
  const user = await model.findOne(uname);
  if (!user) {
    return NextResponse.json({
      message: "User does not not exist. May be try register first!",
      status: 400,
    });
  }

  const token = jwt.sign({ id: user._id }, "aabbcc", { expiresIn: "1d" });
  const res = NextResponse.json({ message: "Token" });
  res.cookies.set("token", token, { httpOnly: true });
  return res;
}
