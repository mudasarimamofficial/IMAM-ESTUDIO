import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const { portfolioUrl, userId } = await request.json();

    if (!portfolioUrl || !userId) {
      return NextResponse.json({ error: 'Missing portfolioUrl or userId' }, { status: 400 });
    }

    // In a real scenario, this would fetch from GitHub/Dribbble, then send to OpenAI API
    
    // Simulate LLM delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulated LLM response
    const mockScore = Math.floor(Math.random() * 30) + 70; // Random score 70-100
    const passedAutomatedVetting = mockScore >= 85;

    // Log the vetting attempt in the database
    // We update the profile or a separate vetting table
    if (passedAutomatedVetting) {
        await supabase
          .from('profiles')
          .update({ role: 'verified_expert', vetted_at: new Date().toISOString() })
          .eq('id', userId);
    } else {
        await supabase
          .from('profiles')
          .update({ role: 'applicant' })
          .eq('id', userId);
    }

    return NextResponse.json({
      success: true,
      score: mockScore,
      passed: passedAutomatedVetting,
      message: passedAutomatedVetting ? 'Portfolio passed automated vetting.' : 'Portfolio requires manual review.',
    });
  } catch (error) {
    console.error('Vetting Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
