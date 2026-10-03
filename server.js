const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

let PORT = parseInt(process.env.PORT || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function calculateSIP(amount, annualRate, months, stepUpPercent = 0) {
  const r = annualRate / 100 / 12;
  let currentSip = amount;
  let totalInvested = 0;
  let futureValue = 0;
  let yearlyData = [];
  const startYear = new Date().getFullYear();

  for (let m = 1; m <= months; m++) {
    totalInvested += currentSip;
    futureValue = (futureValue + currentSip) * (1 + r);
    
    if (m % 12 === 0 || m === months) {
      const yearIndex = Math.floor((m - 1) / 12);
      const invested = Math.round(totalInvested);
      const total = Math.round(futureValue);
      const growth = Math.round(Math.max(0, futureValue - totalInvested));
      yearlyData.push({
        year: startYear + yearIndex,
        principal: invested,
        balance: total,
        interest: growth,
        invested: invested,
        growth: growth,
        total: total
      });
      if (stepUpPercent > 0 && m % 12 === 0) {
        currentSip += (currentSip * stepUpPercent / 100);
      }
    }
  }

  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    sip_amount: amount,
    interest_rate: annualRate,
    period: months,
    invested_amount: Math.round(totalInvested),
    growth_value: Math.round(Math.max(0, futureValue - totalInvested)),
    maturity_amount: Math.round(futureValue),
    purchase_amount: 0,
    sale_amount: 0,
    capital_gain: 0,
    capital_gain_tax: 0,
    list: yearlyData
  };
}

function calculateLumpsum(amount, annualRate, years) {
  const futureValue = amount * Math.pow(1 + annualRate / 100, years);
  const growth = Math.max(0, futureValue - amount);
  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    lumpsum_amount: amount,
    expected_return: annualRate,
    years: years,
    invested_amount: Math.round(amount),
    growth_value: Math.round(growth),
    future_amount: Math.round(futureValue)
  };
}

function calculateSWP(principal, withdrawal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const totalMonths = years * 12;
  let balance = principal;
  let totalWithdrawn = 0;
  let cashFlowList = [];

  for (let m = 1; m <= totalMonths; m++) {
    const interest = balance * r;
    balance = balance + interest - withdrawal;
    totalWithdrawn += withdrawal;
    if (balance < 0) balance = 0;

    cashFlowList.push({
      month: m,
      withdrawal_amt: withdrawal,
      interest_earned: Math.round(interest),
      month_end_balance: Math.round(balance)
    });
    if (balance <= 0) break;
  }

  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    initial_amount: principal,
    total_withdrawal_amount: Math.round(totalWithdrawn),
    total_balance_amount: Math.round(balance),
    total_profit: Math.round(Math.max(0, (balance + totalWithdrawn) - principal)),
    cash_flow_list: cashFlowList
  };
}

function calculateGoal(target, saved, years, annualRate, inflationRate) {
  const adjustedTarget = target * Math.pow(1 + inflationRate / 100, years);
  const futureSavings = saved * Math.pow(1 + annualRate / 100, years);
  const shortfall = Math.max(0, adjustedTarget - futureSavings);
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const monthlySip = r > 0 ? (shortfall * r) / (Math.pow(1 + r, n) - 1) : shortfall / n;
  const totalInvested = monthlySip * n;

  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    monthly_savings: Math.round(monthlySip),
    target_amount: Math.round(adjustedTarget),
    invested_amount: Math.round(totalInvested),
    total_earnings: Math.round(Math.max(0, adjustedTarget - totalInvested))
  };
}

function calculateRetirement(currentAge, retireAge, lifeExpectancy, expensesToday, preReturn, postReturn, inflation) {
  const yearsToRetire = Math.max(1, retireAge - currentAge);
  const retirementYears = Math.max(1, lifeExpectancy - retireAge);
  const expenseAtRetire = expensesToday * Math.pow(1 + inflation / 100, yearsToRetire);
  const realPostReturn = ((1 + postReturn / 100) / (1 + inflation / 100) - 1);
  const annualExpenseAtRetire = expenseAtRetire * 12;
  const corpus = realPostReturn > 0
    ? annualExpenseAtRetire * (1 - Math.pow(1 + realPostReturn, -retirementYears)) / realPostReturn
    : annualExpenseAtRetire * retirementYears;
  const r = preReturn / 100 / 12;
  const n = yearsToRetire * 12;
  const monthlySip = r > 0 ? (corpus * r) / (Math.pow(1 + r, n) - 1) : corpus / n;

  let cashFlowList = [];
  let currentCorpus = corpus;
  let curYearlyExp = annualExpenseAtRetire;
  for (let y = 1; y <= retirementYears; y++) {
    const interest = currentCorpus * (postReturn / 100);
    currentCorpus = currentCorpus + interest - curYearlyExp;
    cashFlowList.push({
      year: y,
      withdrawal_amt: Math.round(curYearlyExp),
      interest_earned: Math.round(interest),
      month_end_balance: Math.round(Math.max(0, currentCorpus))
    });
    curYearlyExp *= (1 + inflation / 100);
  }

  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    retirement_corpus: Math.round(corpus),
    monthly_sip_amount: Math.round(monthlySip),
    expense_inflation_adjust_value: Math.round(expenseAtRetire),
    cash_flow_list: cashFlowList
  };
}

function calculateEducation(currentAge, eduAge, costToday, expectedReturn, inflation) {
  const years = Math.max(1, eduAge - currentAge);
  const targetCost = costToday * Math.pow(1 + inflation / 100, years);
  const r = expectedReturn / 100 / 12;
  const n = years * 12;
  const monthlySip = r > 0 ? (targetCost * r) / (Math.pow(1 + r, n) - 1) : targetCost / n;

  return {
    status: 200,
    status_msg: "Success",
    msg: "Success",
    target_amount: Math.round(targetCost),
    total_monthly_savings: Math.round(monthlySip)
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const urlPath = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // 1. API proxy / endpoint handling for financial calculators
  if (urlPath.startsWith('/api/')) {
    const remoteUrl = 'https://milan-prism.vercel.app' + req.url;

    const sendJson = (data) => {
      if (res.headersSent) return;
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8'
      });
      res.end(JSON.stringify(data));
    };

    function handleLocalApiFallback() {
      const op = parsedUrl.searchParams.get('op');
      if (op === 'sipcalc') {
        const amount = parseFloat(parsedUrl.searchParams.get('sip_amount') || '50000');
        const rate = parseFloat(parsedUrl.searchParams.get('interest_rate') || '12');
        const months = parseInt(parsedUrl.searchParams.get('period_months') || '240', 10);
        const stepUp = parseFloat(parsedUrl.searchParams.get('step_up_percent') || '0');
        return sendJson({ status: "ok", data: calculateSIP(amount, rate, months, stepUp) });
      } else if (op === 'lumpsumcalc') {
        const amount = parseFloat(parsedUrl.searchParams.get('lumpsum_amount') || '500000');
        const rate = parseFloat(parsedUrl.searchParams.get('expected_return') || '12');
        const years = parseFloat(parsedUrl.searchParams.get('years') || '10');
        return sendJson({ status: "ok", data: calculateLumpsum(amount, rate, years) });
      } else if (op === 'swpcalc') {
        const amount = parseFloat(parsedUrl.searchParams.get('amount') || '5000000');
        const withdrawal = parseFloat(parsedUrl.searchParams.get('withdrawal_amount') || '30000');
        const rate = parseFloat(parsedUrl.searchParams.get('interest_rate') || '9');
        const years = parseInt(parsedUrl.searchParams.get('period') || '20', 10);
        return sendJson({ status: "ok", data: calculateSWP(amount, withdrawal, rate, years) });
      } else if (op === 'goal') {
        const dream = parseFloat(parsedUrl.searchParams.get('dream_amount') || '10000000');
        const savings = parseFloat(parsedUrl.searchParams.get('savings_amount') || '0');
        const years = parseFloat(parsedUrl.searchParams.get('years') || '15');
        const ret = parseFloat(parsedUrl.searchParams.get('expected_return') || '12');
        const inf = parseFloat(parsedUrl.searchParams.get('inflation_rate') || '6');
        return sendJson({ status: "ok", data: calculateGoal(dream, savings, years, ret, inf) });
      } else if (op === 'retirement') {
        const curAge = parseInt(parsedUrl.searchParams.get('current_age') || '32', 10);
        const retAge = parseInt(parsedUrl.searchParams.get('retire_age') || '60', 10);
        const life = parseInt(parsedUrl.searchParams.get('life_expectancy') || '85', 10);
        const exp = parseFloat(parsedUrl.searchParams.get('monthly_expense_amount') || '50000');
        const preR = parseFloat(parsedUrl.searchParams.get('expected_return') || '12');
        const postR = parseFloat(parsedUrl.searchParams.get('post_retire_return') || '8');
        const inf = parseFloat(parsedUrl.searchParams.get('inflation') || '6');
        return sendJson({ status: "ok", data: calculateRetirement(curAge, retAge, life, exp, preR, postR, inf) });
      } else if (op === 'education') {
        const curAge = parseInt(parsedUrl.searchParams.get('current_age') || '4', 10);
        const eduAge = parseInt(parsedUrl.searchParams.get('education_age') || '18', 10);
        const amount = parseFloat(parsedUrl.searchParams.get('education_amount') || '2500000');
        const ret = parseFloat(parsedUrl.searchParams.get('expected_return') || '12');
        const inf = parseFloat(parsedUrl.searchParams.get('inflation_rate') || '8');
        return sendJson({ status: "ok", data: calculateEducation(curAge, eduAge, amount, ret, inf) });
      }

      sendJson({ status: "ok", data: { status: 200, msg: "Success" } });
    }

    const proxyReq = https.get(remoteUrl, (proxyRes) => {
      if (proxyRes.statusCode === 200) {
        let rawData = '';
        proxyRes.on('data', chunk => rawData += chunk);
        proxyRes.on('end', () => {
          try {
            const parsed = JSON.parse(rawData);
            if (parsed && parsed.data && Array.isArray(parsed.data.list)) {
              parsed.data.list = parsed.data.list.map(item => ({
                ...item,
                principal: item.principal ?? item.invested ?? 0,
                balance: item.balance ?? item.total ?? 0,
                interest: item.interest ?? item.growth ?? 0,
                invested: item.invested ?? item.principal ?? 0,
                growth: item.growth ?? item.interest ?? 0,
                total: item.total ?? item.balance ?? 0
              }));
            }
            sendJson(parsed);
          } catch (e) {
            handleLocalApiFallback();
          }
        });
        return;
      }
      handleLocalApiFallback();
    });

    proxyReq.on('error', () => {
      handleLocalApiFallback();
    });

    return;
  }

  // 2. Try serving from public folder
  let publicFilePath = path.join(__dirname, 'public', urlPath.replace(/^\//, ''));
  if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
    const ext = path.extname(publicFilePath).toLowerCase();
    const stat = fs.statSync(publicFilePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support HTTP Range for video streaming
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.webm')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(publicFilePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stat.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType
      });
      return fileStream.pipe(res);
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stat.size,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    return fs.createReadStream(publicFilePath).pipe(res);
  }

  // 3. Try routing to scraped pages
  let pageFilename = null;
  if (urlPath === '/research' || urlPath === '/research.html') {
    res.writeHead(302, { 'Location': '/tools' });
    return res.end();
  }
  if (urlPath === '/mutual-funds' || urlPath === '/mutual-funds.html') {
    res.writeHead(302, { 'Location': '/services#mutual-funds' });
    return res.end();
  }
  if (urlPath === '/blog' || urlPath.startsWith('/blog/') || urlPath === '/news' || urlPath.startsWith('/news/')) {
    res.writeHead(302, { 'Location': '/information' });
    return res.end();
  }
  if (urlPath === '/' || urlPath === '') {
    pageFilename = 'index.html';
  } else {
    const cleanRoute = urlPath.replace(/^\//, '').replace(/\/$/, '');
    const candidate1 = cleanRoute.replace(/\//g, '_') + '.html';
    const candidate2 = cleanRoute + '.html';
    
    if (fs.existsSync(path.join(__dirname, 'scraped', 'pages', candidate1))) {
      pageFilename = candidate1;
    } else if (fs.existsSync(path.join(__dirname, 'scraped', 'pages', candidate2))) {
      pageFilename = candidate2;
    }
  }

  if (pageFilename) {
    const pagePath = path.join(__dirname, 'scraped', 'pages', pageFilename);
    if (fs.existsSync(pagePath)) {
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      return fs.createReadStream(pagePath).pipe(res);
    }
  }

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h1>404 Not Found</h1>');
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n========================================`);
    console.log(`  Viruksham Server is LIVE!`);
    console.log(`  Website: http://localhost:${port}`);
    console.log(`  Information & Updates: http://localhost:${port}/information`);
    console.log(`========================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is currently in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

if (require.main === module) {
  startServer(PORT);
}

module.exports = server;
