import { NextResponse } from "next/server";
import { defaultThemeSettings, defaultServices, defaultProjects } from "@/lib/studioControlPlane";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      settings: defaultThemeSettings,
      services: defaultServices,
      projects: defaultProjects,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "Control plane settings updated successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
