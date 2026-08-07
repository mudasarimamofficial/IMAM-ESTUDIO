const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://yqaslfozryelumtlkoxk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxYXNsZm96cnllbHVtdGxrb3hrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzM3MTk2NSwiZXhwIjoyMDk4OTQ3OTY1fQ.uEeq3_5UWF3hXlZUIvNXCP3e-qWaI5AlqUI76fQWElM'
);

async function seed() {
  console.log('Seeding organization...');
  const { data: org, error: orgError } = await supabase
    .from('organizations')
    .upsert({ name: 'IMAM ESTUDIO' })
    .select()
    .single();

  if (orgError) {
    console.log('Error creating organization:', orgError);
  } else {
    console.log('Organization seeded:', org.name);
  }

  // To create a user we use the admin API
  console.log('Seeding super_admin user...');
  const email = 'admin@imamestudio.com';
  const password = 'SuperSecurePassword123!';
  
  const { data: adminUser, error: adminError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      name: 'Mudasar Imam'
    }
  });

  let uid;
  if (adminError) {
    console.log('Admin user already exists or error:', adminError.message);
    // Find user
    const { data: users } = await supabase.auth.admin.listUsers();
    const user = users.users.find(u => u.email === email);
    if (user) uid = user.id;
  } else {
    uid = adminUser.user.id;
    console.log('Created Auth user:', uid);
  }
  
  if (uid) {
    // Now upsert the profile
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: uid,
        full_name: 'Mudasar Imam',
        role: 'super_admin'
      });
      
    if (profileError) {
      console.log('Profile error:', profileError);
    } else {
      console.log('Profile successfully elevated to super_admin!');
    }
  }
}

seed();
