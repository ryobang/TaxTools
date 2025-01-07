let incomeTaxChart = null;

// 社会保険料の計算
function calculateSocialInsurance(income, careInsurance) {
  const monthlyIncome = income / 12;
  const healthInsuranceRate = careInsurance ? 0.1158 / 2 : 0.0998 / 2;
  const healthInsuranceMax = careInsurance ? 160962 / 2 : 138722 / 2;
  const healthInsurance = Math.min(monthlyIncome * healthInsuranceRate, healthInsuranceMax);
  const pensionInsurance = Math.min(monthlyIncome * 0.183 / 2, 118950 / 2);
  return Math.floor((healthInsurance + pensionInsurance) * 12);
}

// 給与所得控除の計算
function calculateSalaryDeduction(income) {
  const brackets = [
    { limit: 1625000, formula: () => 550000 },
    { limit: 1800000, formula: (income) => income * 0.4 - 100000 },
    { limit: 3600000, formula: (income) => income * 0.3 + 80000 },
    { limit: 6600000, formula: (income) => income * 0.2 + 440000 },
    { limit: 8500000, formula: (income) => income * 0.1 + 1100000 },
    { limit: Infinity, formula: () => 1950000 },
  ];

  for (const bracket of brackets) {
    if (income <= bracket.limit) {
      return Math.floor(bracket.formula(income));
    }
  }
  return 0; // 万が一
}

// 基礎控除等の計算
function calculateBasicDeduction(adjustedIncome, hasSpouseDeduction, dependents, specialDependents) {
  let deduction = 0;

  // 基礎控除
  if (adjustedIncome <= 24000000) deduction += 480000;
  else if (adjustedIncome <= 24500000) deduction += 320000;
  else if (adjustedIncome <= 25000000) deduction += 160000;

  // 配偶者控除
  if (hasSpouseDeduction) {
    if (adjustedIncome <= 9000000) deduction += 380000;
    else if (adjustedIncome <= 9500000) deduction += 260000;
    else if (adjustedIncome <= 10000000) deduction += 130000;
  }

  // 扶養控除
  deduction += dependents * 380000;

  // 特定扶養控除
  deduction += specialDependents * 630000;

  return deduction;
}

// 所得税の計算
function calculateIncomeTax(taxableIncome) {
	if (taxableIncome <= 0) return { tax: 0, rate: 0 };
  
	const brackets = [
	  { limit: 1950000, rate: 0.05, deduction: 0 },
	  { limit: 3300000, rate: 0.1, deduction: 97500 },
	  { limit: 6950000, rate: 0.2, deduction: 427500 },
	  { limit: 9000000, rate: 0.23, deduction: 636000 },
	  { limit: 18000000, rate: 0.33, deduction: 1536000 },
	  { limit: 40000000, rate: 0.4, deduction: 2796000 },
	  { limit: Infinity, rate: 0.45, deduction: 4796000 },
	];
  
	for (const bracket of brackets) {
	  if (taxableIncome <= bracket.limit) {
		const tax = Math.floor(taxableIncome * bracket.rate - bracket.deduction);
		return { tax, rate: bracket.rate };
	  }
	}
  }
// 住民税の計算
function calculateResidentTax(taxableIncome) {
  return taxableIncome <= 1000000 ? 0 : Math.floor(taxableIncome * 0.1);
}


//グラフの描画
function renderChart(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents) {
	const incomeData = [];
	const netIncomeData = [];
	const xyLineData = []; // x = y のデータ
  
	for (let income = 0; income <= maxIncome * 10000; income += step) { // 万円を円に変換
	  const socialInsurance = calculateSocialInsurance(income, careInsurance);
	  const salaryDeduction = calculateSalaryDeduction(income);
	  const adjustedIncome = income - socialInsurance;
	  const basicDeduction = calculateBasicDeduction(adjustedIncome, hasSpouseDeduction, dependents, specialDependents);
	  const taxableIncome = Math.max(0, adjustedIncome - basicDeduction - socialInsurance);
	  
	  // 税額のみ取得
	  const { tax: incomeTax } = calculateIncomeTax(taxableIncome);
	  const residentTax = calculateResidentTax(taxableIncome);
	  const netIncome = income - socialInsurance - incomeTax - residentTax;
  
	  incomeData.push(income / 10000);
	  netIncomeData.push(netIncome / 10000);
	  xyLineData.push(income / 10000); // x = y のデータ点を追加
	}
  
	const ctx = document.getElementById('incomeTaxChart').getContext('2d');
	if (incomeTaxChart) incomeTaxChart.destroy();
  
	incomeTaxChart = new Chart(ctx, {
	  type: 'line',
	  data: {
		labels: incomeData.map(value => value.toLocaleString() + '万'),
		datasets: [
		  {
			label: '手取額 (万円)',
			data: netIncomeData,
			borderColor: 'rgba(75, 192, 192, 1)',
			backgroundColor: 'rgba(75, 192, 192, 0.2)',
			borderWidth: 2,
			pointHitRadius: 10,
			fill: true,
		  },
		  {
			label: '年収 (万円)',
			data: xyLineData,
			borderColor: 'rgba(255, 99, 132, 1)',
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderWidth: 2,
			borderDash: [5, 5], // 点線で表示
			pointBackgroundColor: 'rgba(255, 99, 132, 1)',
			pointRadius: 4,
			fill: false,
		  }
		]
	  },
	  options: {
		responsive: true,
		plugins: {
		  legend: {
			display: true,
		  }
		},
		scales: {
		  x: {
			title: {
			  display: true,
			  text: '年収 (万円)',
			}
		  },
		  y: {
			title: {
			  display: true,
			  text: '手取額 (万円)',
			},
			beginAtZero: true,
		  }
		}
	  }
	});
  }

// イベントリスナー設定
document.getElementById('updateGraphButton').addEventListener('click', () => {
  const maxIncome = parseInt(document.getElementById('maxIncome').value, 10); // 万円
  const step = parseInt(document.getElementById('stepSize').value, 10);
  const careInsurance = document.getElementById('careInsurance').checked;
  const hasSpouseDeduction = document.getElementById('spouseDeduction').checked;
  const dependents = parseInt(document.getElementById('dependents').value, 10) || 0;
  const specialDependents = parseInt(document.getElementById('specialDependents').value, 10) || 0;

  updateTable(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents);
  renderChart(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents);
});


// チェックボックス要素の取得
const showTaxRateCheckbox = document.getElementById('showTaxRate');

function updateTable(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents) {
	const tableBody = document.getElementById('incomeTaxTableBody');
	const taxRateHeader = document.querySelector('.tax-rate-header');
	tableBody.innerHTML = '';
  
	// 税率列の表示・非表示を切り替え
	const showTaxRate = showTaxRateCheckbox.checked;
	taxRateHeader.style.display = showTaxRate ? '' : 'none';
  
	for (let income = 0; income <= maxIncome * 10000; income += step) { // 万円を円に変換
	  const socialInsurance = calculateSocialInsurance(income, careInsurance);
	  const salaryDeduction = calculateSalaryDeduction(income);
	  const adjustedIncome = income - salaryDeduction;
	  const basicDeduction = calculateBasicDeduction(adjustedIncome, hasSpouseDeduction, dependents, specialDependents);
	  const taxableIncome = Math.max(0, adjustedIncome - basicDeduction - socialInsurance);
  
	  const { tax: incomeTax, rate } = calculateIncomeTax(taxableIncome);
	  const residentTax = calculateResidentTax(taxableIncome);
	  const netIncome = income - socialInsurance - incomeTax - residentTax;
	  const netIncomeRatio = ((netIncome / income) * 100).toFixed(1);
  
	  const taxRate = (rate * 100).toFixed(0); // 税率を%表示に変換
  
	  const row = document.createElement('tr');
	  row.innerHTML = `
		<td>${(income / 10000).toLocaleString()}万</td>
		<td>${socialInsurance.toLocaleString()}</td>
		<td>${salaryDeduction.toLocaleString()}</td>
		<td>${basicDeduction.toLocaleString()}</td>
		<td>${incomeTax.toLocaleString()}</td>
		<td>${residentTax.toLocaleString()}</td>
		<td>${netIncome.toLocaleString()}</td>
		<td>${netIncomeRatio}%</td>
		<td class="tax-rate-cell" style="${showTaxRate ? '' : 'display:none;'}">${taxRate}%</td>
	  `;
	  tableBody.appendChild(row);
	}
  }

// チェックボックスのイベントリスナーを追加
showTaxRateCheckbox.addEventListener('change', () => {
  document.getElementById('updateGraphButton').click();
});






// 初期描画
const maxIncome = parseInt(document.getElementById('maxIncome').value, 10); // 万円
const step = parseInt(document.getElementById('stepSize').value, 10);
const careInsurance = document.getElementById('careInsurance').checked;
const hasSpouseDeduction = document.getElementById('spouseDeduction').checked;
const dependents = parseInt(document.getElementById('dependents').value, 10) || 0;
const specialDependents = parseInt(document.getElementById('specialDependents').value, 10) || 0;

updateTable(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents);
renderChart(maxIncome, step, careInsurance, hasSpouseDeduction, dependents, specialDependents);
