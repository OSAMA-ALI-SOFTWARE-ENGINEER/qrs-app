// Placeholder for Payload REST API
// Will be wired up when Postgres connection is configured
export async function GET() {
  return new Response(
    JSON.stringify({
      message: 'Payload API endpoint ready',
      status: 'pending_database_configuration',
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function POST() {
  return new Response(
    JSON.stringify({
      message: 'Payload API endpoint ready',
      status: 'pending_database_configuration',
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function PATCH() {
  return new Response(
    JSON.stringify({
      message: 'Payload API endpoint ready',
      status: 'pending_database_configuration',
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function DELETE() {
  return new Response(
    JSON.stringify({
      message: 'Payload API endpoint ready',
      status: 'pending_database_configuration',
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    },
  );
}
