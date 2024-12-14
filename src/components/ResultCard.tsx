import React from 'react';

interface ResultCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export function ResultCard({ label, value, highlight = false }: ResultCardProps) {
  return (
    <div className={`p-4 rounded-lg ${highlight ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}>
      <h3 className="text-sm font-medium text-gray-600">{label}</h3>
      <p className={`text-xl font-bold ${highlight ? 'text-blue-700' : 'text-gray-900'}`}>{value}</p>
    </div>
  );
}