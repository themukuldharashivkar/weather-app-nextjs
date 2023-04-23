import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
  // weather data in the body of the post request
  const { weatherData } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `Pretend you are a weather reporter. Describe the weather in your own words.`,
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of todays weather, use the following data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });

  const {data} = response;

  console.log("DATA is: ", data);

  return NextResponse.json(data.choices[0].message)
}
