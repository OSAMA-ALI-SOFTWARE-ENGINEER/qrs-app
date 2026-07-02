interface KPIItem {
  label: string;
  value: string;
}

interface KPIStripProps {
  items: KPIItem[];
}

export function KPIStrip({ items }: KPIStripProps) {
  return (
    <div className="bg-card-dark py-space-8 px-space-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4">
          {items.map((item, idx) => (
            <div key={idx} className="text-center">
              <p className="font-body text-small text-teal-700 mb-space-2">
                {item.label}
              </p>
              <p className="font-mono text-kpi text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
