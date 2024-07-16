import { NextResponse } from "next/server";
import formDataModel from "@/app/Backend/formDataModel";

import connectDB from "@/app/Backend/db";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();

    await connectDB();

    if (!data) {
      return NextResponse.json({
        message: "you should provied informations about the movie",
        status: 404,
      });
    }
    const movie = new formDataModel(data);
    await movie.save();

    return NextResponse.json({
      message: "you are successfuly added the new formData",
      status: 200,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({
      message: error.toString(),
      status: 500,
    });
  }
};
