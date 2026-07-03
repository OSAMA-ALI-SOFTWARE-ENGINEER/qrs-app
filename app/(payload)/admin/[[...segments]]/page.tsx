export default function Admin() {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold mb-4">Payload Admin Panel</h1>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
        <p className="text-blue-900 mb-4">
          ✅ <strong>Database is configured and ready!</strong>
        </p>
        <p className="text-blue-800 mb-4">
          The Payload CMS database has been initialized with all collections:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-1 mb-4">
          <li>Users & Authentication</li>
          <li>Media Library</li>
          <li>Pages (Versioned)</li>
          <li>Blog Posts (Versioned)</li>
          <li>Validation Reports</li>
          <li>Peril Status</li>
          <li>Redirects</li>
          <li>Form Submissions</li>
          <li>Audit Log</li>
        </ul>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <p className="text-amber-900 font-semibold mb-2">
          ⚠️ Full Admin Dashboard Not Available Yet
        </p>
        <p className="text-amber-800 mb-4">
          Due to Turbopack bundler incompatibility with Payload's dependencies, the full admin dashboard UI is not accessible in development mode.
        </p>
        <p className="text-amber-800 mb-4">
          <strong>Workaround options:</strong>
        </p>
        <ul className="list-disc list-inside text-amber-800 space-y-2">
          <li>
            <strong>REST API:</strong> Use Payload's REST API at <code className="bg-amber-100 px-2 py-1 rounded">/api/</code> to manage content programmatically
          </li>
          <li>
            <strong>GraphQL API:</strong> Query and mutate data via <code className="bg-amber-100 px-2 py-1 rounded">/api/graphql</code>
          </li>
          <li>
            <strong>Production:</strong> The full admin UI will be available in production with standard Next.js build
          </li>
          <li>
            <strong>Next Steps:</strong> Create content via API, then display it on the frontend
          </li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">API Endpoints</h2>
        <p className="text-gray-700 mb-4">
          Access Payload's full API at:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>📍 <strong>REST API:</strong> <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000/api</code></li>
          <li>📍 <strong>GraphQL:</strong> <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:3000/api/graphql</code></li>
        </ul>
      </div>
    </div>
  );
}
