import OpenAI from "openai";
import { NextResponse } from "next/server";

export const POST = async() => {
  const openai = new OpenAI({apiKey:process.env.OPENAI_KEY});
  try {
    const response = await openai.images.generate({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    const image_url = response.data[0].url;
    return NextResponse.json({
        status:200,
        image_url
    });
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      return NextResponse.json({
        status:500,
        message:error.response
      })
    } else {
      console.log(error.message);
      return NextResponse.json({
        status:500,
        message:error.message
      })
    }
  }
};
