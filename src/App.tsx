import React, { useState, useCallback } from 'react';
import { Calculator } from 'lucide-react';
import { InputField } from './components/InputField';
import { ResultCard } from './components/ResultCard';
import { calculateCompoundInterest } from './utils/calculations';
import { formatCurrency } from './utils/formatters';

function App() {
  const [principal, setPrincipal] = useState<string>('1000');
  const [rate, setRate] = useState<string>('1');  // Changed default to 1% monthly
  const [days, setDays] = useState<string>('0');
  const [months, setMonths] = useState<string>('12');  // Changed default to 12 months
  const [years, setYears] = useState<string>('0');  // Changed default to 0 years

  const calculateResults = useCallback(() => {
    const results = calculateCompoundInterest(
      Number(principal),
      Number(rate),
      Number(days),
      Number(months),
      Number(years)
    );

    return {
      totalWithInterest: formatCurrency(results.totalWithInterest),
      interestAmount: formatCurrency(results.interestAmount),
      totalWithoutInterest: formatCurrency(results.totalWithoutInterest)
    };
  }, [principal, rate, days, months, years]);

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Calculator className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Calculadora de Juros Compostos
          </h2>
          <p className="mt-2 text-sm text-gray-600">Cálculo com taxa mensal</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <InputField
            label="Valor Inicial (R$)"
            value={principal}
            onChange={setPrincipal}
          />
          <InputField
            label="Taxa de Juros (% ao mês)"
            value={rate}
            onChange={setRate}
          />
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Período</h3>
            <div className="grid grid-cols-3 gap-4">
              <InputField
                label="Dias"
                value={days}
                onChange={setDays}
                min="0"
                step="1"
              />
              <InputField
                label="Meses"
                value={months}
                onChange={setMonths}
                min="0"
                step="1"
              />
              <InputField
                label="Anos"
                value={years}
                onChange={setYears}
                min="0"
                step="1"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <ResultCard
            label="Valor Total com Juros"
            value={results.totalWithInterest}
            highlight={true}
          />
          <div className="grid grid-cols-2 gap-4">
            <ResultCard
              label="Juros Totais"
              value={results.interestAmount}
            />
            <ResultCard
              label="Valor Inicial"
              value={results.totalWithoutInterest}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;