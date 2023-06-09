"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-4xl text-center mb-10 font-bold">Weather</Text>
        <Subtitle className="text-lg text-center">
          Powered by Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
        <Divider className="mb-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City Picker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
