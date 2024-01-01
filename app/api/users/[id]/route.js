import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/app/libs/db";
import model from "@/app/models/model";

/*export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}*/

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  const user = await model.findOne({ _id: id });
  console.log(user);
  return NextResponse.json({ user }, { status: 200 });
}
