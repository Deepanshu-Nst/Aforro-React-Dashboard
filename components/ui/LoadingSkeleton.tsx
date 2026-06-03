export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-[#EEEEEE] p-5 animate-pulse">
      <div className="w-10 h-10 rounded-xl skeleton mb-3" />
      <div className="h-6 rounded skeleton w-20 mb-1.5" />
      <div className="h-3 rounded skeleton w-28 mb-2" />
      <div className="h-4 rounded skeleton w-24" />
    </div>
  );
}

export function SkeletonChartCard({ height = 180 }: { height?: number }) {
  return (
    <div className="bg-white rounded-2xl border border-[#EEEEEE] p-5 animate-pulse">
      <div className="h-3.5 rounded skeleton w-32 mb-1.5" />
      <div className="h-2.5 rounded skeleton w-20 mb-4" />
      <div className="rounded-xl skeleton" style={{ height }} />
    </div>
  );
}

export function SkeletonTableRow() {
  return (
    <tr className="border-b border-[#EEEEEE]">
      {[100, 160, 130, 80].map((w, i) => (
        <td key={i} className="px-5 py-3.5">
          <div className="h-3 rounded skeleton" style={{ width: w }} />
        </td>
      ))}
    </tr>
  );
}
