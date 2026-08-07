echo "https://yqaslfozryelumtlkoxk.supabase.co" | vercel env add NEXT_PUBLIC_SUPABASE_URL production
echo "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxYXNsZm96cnllbHVtdGxrb3hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNzE5NjUsImV4cCI6MjA5ODk0Nzk2NX0.Cn8C2QKKY4ui9UF-gq8BK3-M7wGUzcfx8kX3-iUFClM" | vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
echo "pk_test_placeholder_key" | vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY production
echo "sk_test_placeholder_key" | vercel env add STRIPE_SECRET_KEY production
echo "whsec_placeholder" | vercel env add STRIPE_WEBHOOK_SECRET production
echo "sk-proj-placeholder" | vercel env add OPENAI_API_KEY production
echo "https://calendly.com/mudasar-imam" | vercel env add NEXT_PUBLIC_CALENDLY_URL production
vercel --prod --yes
