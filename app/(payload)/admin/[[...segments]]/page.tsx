export default function Admin() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Payload Admin Panel</h1>
      <p className="mt-4 text-gray-600">
        Admin panel requires DATABASE_URL to be configured. Once your Postgres instance is
        ready, the admin interface will be available at this URL.
      </p>
    </div>
  );
}
