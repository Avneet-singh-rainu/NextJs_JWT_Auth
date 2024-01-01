import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/libs/db";
import model from "@/app/models/model";

export async function POST(NextRequest) {
  await connectDB();
  const msg = "success";
  const body = await NextRequest.json();
  const { name, password } = body;
  await model.create({ name: name, password: password });
  return NextResponse.json({ message: "success", status: 200 });
}
