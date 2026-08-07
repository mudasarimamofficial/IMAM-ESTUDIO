import { NextResponse } from 'next/server';

// Skeleton endpoint for Vapi AI voice agent webhooks
export async function POST(request: Request) {
  try {
    const payload = await request.json();
    
    // Log incoming call data
    console.log('[Vapi Voice Agent] Webhook received:', payload);

    const messageType = payload.message?.type;

    if (messageType === 'function-call') {
      const functionCall = payload.message.functionCall;
      
      // Handle custom functions triggered by the AI voice agent
      if (functionCall.name === 'checkExpertAvailability') {
        // e.g. mock response
        return NextResponse.json({
          results: [{
            toolCallId: functionCall.id,
            result: 'Mudasar Imam is available for consultation this Thursday.'
          }]
        });
      }
    }

    if (messageType === 'end-of-call-report') {
      // Store call transcript, recording URL, and summary to Supabase
      console.log('[Vapi Voice Agent] Call summary:', payload.message.summary);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Vapi Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
