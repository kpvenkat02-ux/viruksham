/**
 * Interactive Financial Calculators for Viruksham Tools Page
 * Supports: SIP, Lumpsum, SWP, Goal, Retirement, Child Education
 */

(function() {
  // Format Indian Currency
  function formatINR(val, compact = false) {
    if (isNaN(val) || val === null || val === undefined) return '₹0';
    val = Math.round(val);
    if (compact) {
      if (val >= 10000000) {
        return '₹' + (val / 10000000).toFixed(2) + ' Cr';
      } else if (val >= 100000) {
        return '₹' + (val / 100000).toFixed(2) + ' L';
      }
    }
    return '₹' + val.toLocaleString('en-IN');
  }

  // Parse Indian currency string to number
  function parseINR(str) {
    if (typeof str === 'number') return str;
    if (!str) return 0;
    const clean = str.toString().replace(/[^0-9.]/g, '');
    return parseFloat(clean) || 0;
  }

  // Calculation Engines
  const Calculators = {
    sip: {
      title: "SIP Calculator",
      calculate: function(state) {
        const p = state.amount || 50000;
        const years = state.years || 20;
        const rate = state.rate || 12;
        const r = rate / 100 / 12;
        const months = years * 12;

        const totalInvested = p * months;
        let futureValue = 0;
        if (r > 0) {
          futureValue = p * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
        } else {
          futureValue = totalInvested;
        }
        const returns = Math.max(0, futureValue - totalInvested);

        return {
          resultTitle: `Value After ${years} Years`,
          total: futureValue,
          invested: totalInvested,
          growth: returns,
          primaryLabel: `Value After ${years} Years`,
          investedLabel: "Total Amount Invested",
          growthLabel: "Estimated Returns"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Installment Amount</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-sip-amount" value="${(state.amount || 50000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[10000, 25000, 50000, 100000].map(amt => `
                <button type="button" class="calc-chip ${state.amount === amt ? 'active' : ''}" data-field="amount" data-value="${amt}">
                  ${amt >= 100000 ? '₹' + (amt/100000).toFixed(2) + ' L' : '₹' + amt.toLocaleString('en-IN')}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Total Number of Years</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.years - 1) / (40 - 1)) * 100}%">${state.years} Years</span>
              </div>
              <input class="calc-slider" type="range" min="1" max="40" step="1" value="${state.years}" data-field="years" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.years - 1) / (40 - 1)) * 100}%, #E2E8F0 ${((state.years - 1) / (40 - 1)) * 100}%)" />
              <div class="calc-bounds"><span>1 Year</span><span>40 Years</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Expected Return Rate</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.rate - 4) / (30 - 4)) * 100}%">${state.rate}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="30" step="0.5" value="${state.rate}" data-field="rate" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.rate - 4) / (30 - 4)) * 100}%, #E2E8F0 ${((state.rate - 4) / (30 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>30%</span></div>
            </div>
          </div>
        `;
      }
    },

    lumpsum: {
      title: "Lumpsum Calculator",
      calculate: function(state) {
        const p = state.amount || 500000;
        const years = state.years || 10;
        const rate = state.rate || 12;

        const futureValue = p * Math.pow(1 + rate / 100, years);
        const returns = Math.max(0, futureValue - p);

        return {
          resultTitle: `Value After ${years} Years`,
          total: futureValue,
          invested: p,
          growth: returns,
          primaryLabel: `Value After ${years} Years`,
          investedLabel: "Total Amount Invested",
          growthLabel: "Estimated Returns"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Total Investment Amount</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-lumpsum-amount" value="${(state.amount || 500000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[100000, 250000, 500000, 1000000].map(amt => `
                <button type="button" class="calc-chip ${state.amount === amt ? 'active' : ''}" data-field="amount" data-value="${amt}">
                  ${amt >= 100000 ? '₹' + (amt/100000).toFixed(2) + ' L' : '₹' + amt.toLocaleString('en-IN')}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Investment Period (Years)</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.years - 1) / (40 - 1)) * 100}%">${state.years} Years</span>
              </div>
              <input class="calc-slider" type="range" min="1" max="40" step="1" value="${state.years}" data-field="years" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.years - 1) / (40 - 1)) * 100}%, #E2E8F0 ${((state.years - 1) / (40 - 1)) * 100}%)" />
              <div class="calc-bounds"><span>1 Year</span><span>40 Years</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Expected Annual Return</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.rate - 4) / (30 - 4)) * 100}%">${state.rate}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="30" step="0.5" value="${state.rate}" data-field="rate" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.rate - 4) / (30 - 4)) * 100}%, #E2E8F0 ${((state.rate - 4) / (30 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>30%</span></div>
            </div>
          </div>
        `;
      }
    },

    swp: {
      title: "SWP Calculator",
      calculate: function(state) {
        const principal = state.amount || 5000000;
        const withdrawal = state.withdrawal || 30000;
        const rate = state.rate || 9;
        const years = state.years || 20;
        const r = rate / 100 / 12;
        const months = years * 12;

        let balance = principal;
        let totalWithdrawn = 0;

        for (let m = 1; m <= months; m++) {
          const interest = balance * r;
          balance = balance + interest - withdrawal;
          totalWithdrawn += withdrawal;
          if (balance < 0) {
            balance = 0;
            break;
          }
        }

        const totalValue = balance + totalWithdrawn;
        const profit = Math.max(0, totalValue - principal);

        return {
          resultTitle: "Total Value Created",
          total: totalValue,
          invested: totalWithdrawn,
          growth: balance,
          primaryLabel: `Total Withdrawn (${years} Yrs)`,
          investedLabel: "Final Balance Left",
          growthLabel: "Total Profit Earned"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Initial Investment Amount</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-swp-amount" value="${(state.amount || 5000000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[1000000, 2500000, 5000000, 10000000].map(amt => `
                <button type="button" class="calc-chip ${state.amount === amt ? 'active' : ''}" data-field="amount" data-value="${amt}">
                  ${amt >= 10000000 ? '₹' + (amt/10000000).toFixed(2) + ' Cr' : '₹' + (amt/100000).toFixed(2) + ' L'}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-field">
            <label class="calc-label">Monthly Withdrawal Amount</label>
            <div class="calc-slider-head">
              <span class="calc-bubble" style="left: ${((state.withdrawal - 5000) / (200000 - 5000)) * 100}%">₹${state.withdrawal.toLocaleString('en-IN')}</span>
            </div>
            <input class="calc-slider" type="range" min="5000" max="200000" step="1000" value="${state.withdrawal}" data-field="withdrawal" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.withdrawal - 5000) / (200000 - 5000)) * 100}%, #E2E8F0 ${((state.withdrawal - 5000) / (200000 - 5000)) * 100}%)" />
            <div class="calc-bounds"><span>₹5,000</span><span>₹2,00,000</span></div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Time Period (Years)</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.years - 1) / (30 - 1)) * 100}%">${state.years} Years</span>
              </div>
              <input class="calc-slider" type="range" min="1" max="30" step="1" value="${state.years}" data-field="years" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.years - 1) / (30 - 1)) * 100}%, #E2E8F0 ${((state.years - 1) / (30 - 1)) * 100}%)" />
              <div class="calc-bounds"><span>1 Year</span><span>30 Years</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Expected Return Rate</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.rate - 4) / (20 - 4)) * 100}%">${state.rate}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="20" step="0.5" value="${state.rate}" data-field="rate" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.rate - 4) / (20 - 4)) * 100}%, #E2E8F0 ${((state.rate - 4) / (20 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>20%</span></div>
            </div>
          </div>
        `;
      }
    },

    goal: {
      title: "Goal Planner",
      calculate: function(state) {
        const dream = state.amount || 10000000;
        const saved = state.saved || 0;
        const years = state.years || 15;
        const rate = state.rate || 12;
        const inflation = state.inflation || 6;

        const adjustedTarget = dream * Math.pow(1 + inflation / 100, years);
        const futureSavings = saved * Math.pow(1 + rate / 100, years);
        const shortfall = Math.max(0, adjustedTarget - futureSavings);
        const r = rate / 100 / 12;
        const n = years * 12;
        const monthlySip = r > 0 ? (shortfall * r) / ((Math.pow(1 + r, n) - 1) * (1 + r)) : shortfall / n;
        const totalInvested = monthlySip * n;

        return {
          resultTitle: "Required Monthly SIP",
          total: monthlySip,
          invested: totalInvested,
          growth: adjustedTarget,
          primaryLabel: "Required Monthly SIP",
          investedLabel: "Total Amount Invested",
          growthLabel: "Future Goal Cost (Inflation Adj.)"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Dream Goal Target (In Today's Value)</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-goal-amount" value="${(state.amount || 10000000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[2500000, 5000000, 10000000, 20000000].map(amt => `
                <button type="button" class="calc-chip ${state.amount === amt ? 'active' : ''}" data-field="amount" data-value="${amt}">
                  ${amt >= 10000000 ? '₹' + (amt/10000000).toFixed(2) + ' Cr' : '₹' + (amt/100000).toFixed(2) + ' L'}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Years to Achieve Goal</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.years - 1) / (35 - 1)) * 100}%">${state.years} Years</span>
              </div>
              <input class="calc-slider" type="range" min="1" max="35" step="1" value="${state.years}" data-field="years" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.years - 1) / (35 - 1)) * 100}%, #E2E8F0 ${((state.years - 1) / (35 - 1)) * 100}%)" />
              <div class="calc-bounds"><span>1 Year</span><span>35 Years</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Expected Return Rate</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.rate - 4) / (20 - 4)) * 100}%">${state.rate}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="20" step="0.5" value="${state.rate}" data-field="rate" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.rate - 4) / (20 - 4)) * 100}%, #E2E8F0 ${((state.rate - 4) / (20 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>20%</span></div>
            </div>
          </div>
          <div class="calc-field" style="margin-top: 1rem;">
            <label class="calc-label">Expected Inflation Rate</label>
            <div class="calc-slider-head">
              <span class="calc-bubble" style="left: ${((state.inflation - 2) / (12 - 2)) * 100}%">${state.inflation}%</span>
            </div>
            <input class="calc-slider" type="range" min="2" max="12" step="0.5" value="${state.inflation}" data-field="inflation" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.inflation - 2) / (12 - 2)) * 100}%, #E2E8F0 ${((state.inflation - 2) / (12 - 2)) * 100}%)" />
            <div class="calc-bounds"><span>2%</span><span>12%</span></div>
          </div>
        `;
      }
    },

    retirement: {
      title: "Retirement Calculator",
      calculate: function(state) {
        const curAge = state.curAge || 32;
        const retAge = state.retAge || 60;
        const life = state.life || 85;
        const exp = state.exp || 50000;
        const preR = state.preR || 12;
        const postR = state.postR || 8;
        const inf = state.inf || 6;

        const yearsToRetire = Math.max(1, retAge - curAge);
        const retirementYears = Math.max(1, life - retAge);
        const expenseAtRetire = exp * Math.pow(1 + inf / 100, yearsToRetire);
        const realPostReturn = ((1 + postR / 100) / (1 + inf / 100) - 1);
        const annualExpenseAtRetire = expenseAtRetire * 12;
        
        const corpus = realPostReturn > 0
          ? annualExpenseAtRetire * (1 - Math.pow(1 + realPostReturn, -retirementYears)) / realPostReturn
          : annualExpenseAtRetire * retirementYears;

        const r = preR / 100 / 12;
        const n = yearsToRetire * 12;
        const monthlySip = r > 0 ? (corpus * r) / ((Math.pow(1 + r, n) - 1) * (1 + r)) : corpus / n;

        return {
          resultTitle: "Target Retirement Corpus",
          total: corpus,
          invested: monthlySip,
          growth: expenseAtRetire,
          primaryLabel: "Target Retirement Corpus",
          investedLabel: "Required Monthly SIP",
          growthLabel: "Monthly Expense At Retirement"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Monthly Expenses Today</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-retirement-exp" value="${(state.exp || 50000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[30000, 50000, 75000, 100000].map(amt => `
                <button type="button" class="calc-chip ${state.exp === amt ? 'active' : ''}" data-field="exp" data-value="${amt}">
                  ${amt >= 100000 ? '₹' + (amt/100000).toFixed(2) + ' L' : '₹' + amt.toLocaleString('en-IN')}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Current Age</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.curAge - 20) / (55 - 20)) * 100}%">${state.curAge} Yrs</span>
              </div>
              <input class="calc-slider" type="range" min="20" max="55" step="1" value="${state.curAge}" data-field="curAge" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.curAge - 20) / (55 - 20)) * 100}%, #E2E8F0 ${((state.curAge - 20) / (55 - 20)) * 100}%)" />
              <div class="calc-bounds"><span>20 Yrs</span><span>55 Yrs</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Desired Retirement Age</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.retAge - 45) / (70 - 45)) * 100}%">${state.retAge} Yrs</span>
              </div>
              <input class="calc-slider" type="range" min="45" max="70" step="1" value="${state.retAge}" data-field="retAge" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.retAge - 45) / (70 - 45)) * 100}%, #E2E8F0 ${((state.retAge - 45) / (70 - 45)) * 100}%)" />
              <div class="calc-bounds"><span>45 Yrs</span><span>70 Yrs</span></div>
            </div>
          </div>
          <div class="calc-row" style="margin-top: 1rem;">
            <div class="calc-field">
              <label class="calc-label">Pre-Retirement Return</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.preR - 6) / (18 - 6)) * 100}%">${state.preR}%</span>
              </div>
              <input class="calc-slider" type="range" min="6" max="18" step="0.5" value="${state.preR}" data-field="preR" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.preR - 6) / (18 - 6)) * 100}%, #E2E8F0 ${((state.preR - 6) / (18 - 6)) * 100}%)" />
              <div class="calc-bounds"><span>6%</span><span>18%</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Expected Inflation</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.inf - 3) / (10 - 3)) * 100}%">${state.inf}%</span>
              </div>
              <input class="calc-slider" type="range" min="3" max="10" step="0.5" value="${state.inf}" data-field="inf" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.inf - 3) / (10 - 3)) * 100}%, #E2E8F0 ${((state.inf - 3) / (10 - 3)) * 100}%)" />
              <div class="calc-bounds"><span>3%</span><span>10%</span></div>
            </div>
          </div>
        `;
      }
    },

    childEducation: {
      title: "Child Education Calculator",
      calculate: function(state) {
        const curAge = state.curAge || 4;
        const eduAge = state.eduAge || 18;
        const amount = state.amount || 2500000;
        const rate = state.rate || 12;
        const inflation = state.inflation || 8;

        const years = Math.max(1, eduAge - curAge);
        const targetCost = amount * Math.pow(1 + inflation / 100, years);
        const r = rate / 100 / 12;
        const n = years * 12;
        const monthlySip = r > 0 ? (targetCost * r) / ((Math.pow(1 + r, n) - 1) * (1 + r)) : targetCost / n;
        const totalInvested = monthlySip * n;

        return {
          resultTitle: "Future Cost of Education",
          total: targetCost,
          invested: monthlySip,
          growth: totalInvested,
          primaryLabel: `Future Education Cost (In ${years} Yrs)`,
          investedLabel: "Required Monthly SIP",
          growthLabel: "Total Amount You Will Invest"
        };
      },
      renderInputs: function(state) {
        return `
          <div class="calc-field">
            <label class="calc-label">Higher Education Cost (Today's Value)</label>
            <div class="calc-money">
              <span class="calc-rupee">₹</span>
              <input type="text" class="calc-input-money" id="input-edu-amount" value="${(state.amount || 2500000).toLocaleString('en-IN')}" />
            </div>
            <div class="calc-chips">
              ${[1500000, 2500000, 5000000, 7500000].map(amt => `
                <button type="button" class="calc-chip ${state.amount === amt ? 'active' : ''}" data-field="amount" data-value="${amt}">
                  ${'₹' + (amt/100000).toFixed(2) + ' L'}
                </button>
              `).join('')}
            </div>
          </div>
          <div class="calc-row">
            <div class="calc-field">
              <label class="calc-label">Child's Current Age</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.curAge - 0) / (15 - 0)) * 100}%">${state.curAge} Yrs</span>
              </div>
              <input class="calc-slider" type="range" min="0" max="15" step="1" value="${state.curAge}" data-field="curAge" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.curAge - 0) / (15 - 0)) * 100}%, #E2E8F0 ${((state.curAge - 0) / (15 - 0)) * 100}%)" />
              <div class="calc-bounds"><span>0 Yrs</span><span>15 Yrs</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">College / Admission Age</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.eduAge - 16) / (25 - 16)) * 100}%">${state.eduAge} Yrs</span>
              </div>
              <input class="calc-slider" type="range" min="16" max="25" step="1" value="${state.eduAge}" data-field="eduAge" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.eduAge - 16) / (25 - 16)) * 100}%, #E2E8F0 ${((state.eduAge - 16) / (25 - 16)) * 100}%)" />
              <div class="calc-bounds"><span>16 Yrs</span><span>25 Yrs</span></div>
            </div>
          </div>
          <div class="calc-row" style="margin-top: 1rem;">
            <div class="calc-field">
              <label class="calc-label">Expected Annual Return</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.rate - 4) / (20 - 4)) * 100}%">${state.rate}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="20" step="0.5" value="${state.rate}" data-field="rate" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.rate - 4) / (20 - 4)) * 100}%, #E2E8F0 ${((state.rate - 4) / (20 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>20%</span></div>
            </div>
            <div class="calc-field">
              <label class="calc-label">Education Inflation</label>
              <div class="calc-slider-head">
                <span class="calc-bubble" style="left: ${((state.inflation - 4) / (15 - 4)) * 100}%">${state.inflation}%</span>
              </div>
              <input class="calc-slider" type="range" min="4" max="15" step="0.5" value="${state.inflation}" data-field="inflation" style="background: linear-gradient(to right, var(--color-navy, #012F6A) ${((state.inflation - 4) / (15 - 4)) * 100}%, #E2E8F0 ${((state.inflation - 4) / (15 - 4)) * 100}%)" />
              <div class="calc-bounds"><span>4%</span><span>15%</span></div>
            </div>
          </div>
        `;
      }
    }
  };

  // State Management
  const calcState = {
    activeTab: 'sip',
    sip: { amount: 50000, years: 20, rate: 12 },
    lumpsum: { amount: 500000, years: 10, rate: 12 },
    swp: { amount: 5000000, withdrawal: 30000, rate: 9, years: 20 },
    goal: { amount: 10000000, saved: 0, years: 15, rate: 12, inflation: 6 },
    retirement: { curAge: 32, retAge: 60, life: 85, exp: 50000, preR: 12, postR: 8, inf: 6 },
    childEducation: { curAge: 4, eduAge: 18, amount: 2500000, rate: 12, inflation: 8 }
  };

  function renderChart(res, type) {
    const isDonut = type === 'sip' || type === 'lumpsum' || type === 'swp';
    const total = res.invested + res.growth;
    const invPercent = total > 0 ? Math.round((res.invested / total) * 100) : 50;
    const grwPercent = 100 - invPercent;

    const strokeDash = 2 * Math.PI * 40;
    const invOffset = strokeDash * (1 - invPercent / 100);

    return `
      <div class="calc-visual-wrap">
        <div class="calc-visual-chart">
          <svg viewBox="0 0 100 100" class="calc-donut-svg">
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E2E8F0" stroke-width="14" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="var(--color-navy, #012F6A)" stroke-width="14"
              stroke-dasharray="${strokeDash}" stroke-dashoffset="${invOffset}" transform="rotate(-90 50 50)" style="transition: stroke-dashoffset 0.5s ease;" />
            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A9782A" stroke-width="14"
              stroke-dasharray="${strokeDash}" stroke-dashoffset="${strokeDash - (strokeDash * (grwPercent / 100))}" transform="rotate(${invPercent * 3.6 - 90} 50 50)" style="transition: all 0.5s ease;" />
          </svg>
          <div class="calc-donut-center">
            <span class="calc-donut-label">Total</span>
            <span class="calc-donut-val">${formatINR(res.total, true)}</span>
          </div>
        </div>
        <div class="calc-legend">
          <div class="calc-legend-item">
            <span class="calc-legend-dot" style="background: var(--color-navy, #012F6A);"></span>
            <span class="calc-legend-text">${res.investedLabel} (${invPercent}%)</span>
            <strong class="calc-legend-val">${formatINR(res.invested)}</strong>
          </div>
          <div class="calc-legend-item">
            <span class="calc-legend-dot" style="background: #A9782A;"></span>
            <span class="calc-legend-text">${res.growthLabel} (${grwPercent}%)</span>
            <strong class="calc-legend-val">${formatINR(res.growth)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  function updateActivePanel() {
    const tab = calcState.activeTab;
    const calc = Calculators[tab];
    if (!calc) return;

    const state = calcState[tab];
    const res = calc.calculate(state);

    const inputsContainer = document.getElementById('calc-dynamic-inputs');
    const resultsContainer = document.getElementById('calc-dynamic-results');
    const chartContainer = document.getElementById('calc-dynamic-chart');

    if (inputsContainer) {
      inputsContainer.innerHTML = calc.renderInputs(state);
      attachInputEvents(inputsContainer, tab);
    }

    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="quick-calculators-module__fdgQYG__resultBlock">
          <span class="quick-calculators-module__fdgQYG__resultLabel">${res.primaryLabel}</span>
          <span class="quick-calculators-module__fdgQYG__resultValue">${formatINR(res.total)}</span>
        </div>
        <div class="quick-calculators-module__fdgQYG__resultBlock">
          <span class="quick-calculators-module__fdgQYG__resultLabel">${res.investedLabel}</span>
          <span class="quick-calculators-module__fdgQYG__resultValue quick-calculators-module__fdgQYG__small">${formatINR(res.invested)}</span>
        </div>
        <div class="quick-calculators-module__fdgQYG__resultBlock">
          <span class="quick-calculators-module__fdgQYG__resultLabel">${res.growthLabel}</span>
          <span class="quick-calculators-module__fdgQYG__resultValue quick-calculators-module__fdgQYG__small">${formatINR(res.growth)}</span>
        </div>
      `;
    }

    if (chartContainer) {
      chartContainer.innerHTML = `
        <figure style="margin:0; width:100%;">
          <figcaption style="font-size:12.5px;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;color:var(--color-ink-soft); margin-bottom:12px;">Projected Growth Breakdown</figcaption>
          ${renderChart(res, tab)}
        </figure>
      `;
    }
  }

  function attachInputEvents(container, tab) {
    const state = calcState[tab];

    // Money Inputs
    const moneyInputs = container.querySelectorAll('.calc-input-money');
    moneyInputs.forEach(input => {
      input.addEventListener('input', function(e) {
        const val = parseINR(e.target.value);
        if (tab === 'retirement') state.exp = val;
        else state.amount = val;
        updateActivePanel();
      });

      input.addEventListener('blur', function(e) {
        const val = parseINR(e.target.value);
        e.target.value = val.toLocaleString('en-IN');
      });
    });

    // Chips
    const chips = container.querySelectorAll('.calc-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', function() {
        const field = this.getAttribute('data-field');
        const val = parseFloat(this.getAttribute('data-value'));
        if (field && !isNaN(val)) {
          state[field] = val;
          updateActivePanel();
        }
      });
    });

    // Sliders
    const sliders = container.querySelectorAll('.calc-slider');
    sliders.forEach(slider => {
      slider.addEventListener('input', function() {
        const field = this.getAttribute('data-field');
        const val = parseFloat(this.value);
        if (field && !isNaN(val)) {
          state[field] = val;
          updateActivePanel();
        }
      });
    });
  }

  function initTabs() {
    const tabs = document.querySelectorAll('.quick-calculators-module__fdgQYG__tab');
    const tabMap = {
      'SIP': 'sip',
      'Lumpsum': 'lumpsum',
      'SWP': 'swp',
      'Goal': 'goal',
      'Retirement': 'retirement',
      'Child Education': 'childEducation'
    };

    tabs.forEach(tabBtn => {
      tabBtn.addEventListener('click', function() {
        const text = this.textContent.trim();
        const tabKey = tabMap[text] || 'sip';
        
        tabs.forEach(t => {
          t.setAttribute('aria-selected', 'false');
          t.classList.remove('active');
        });
        this.setAttribute('aria-selected', 'true');
        this.classList.add('active');

        calcState.activeTab = tabKey;
        if (history.replaceState) {
          history.replaceState(null, null, '#' + tabKey);
        }
        updateActivePanel();
      });
    });

    // Check URL Hash for deep link
    const hash = window.location.hash.replace('#', '');
    if (hash && Calculators[hash]) {
      calcState.activeTab = hash;
      tabs.forEach(t => {
        const text = t.textContent.trim();
        if (tabMap[text] === hash) {
          tabs.forEach(other => other.setAttribute('aria-selected', 'false'));
          t.setAttribute('aria-selected', 'true');
        }
      });
    }
  }

  // Setup DOM Structure for Calculators
  function setupCalculatorDOM() {
    const panel = document.querySelector('.quick-calculators-module__fdgQYG__panel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="quick-calculators-module__fdgQYG__inputs" id="calc-dynamic-inputs"></div>
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div class="quick-calculators-module__fdgQYG__result" id="calc-dynamic-results"></div>
        <div class="quick-calculators-module__fdgQYG__chart" id="calc-dynamic-chart"></div>
      </div>
    `;

    initTabs();
    updateActivePanel();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCalculatorDOM);
  } else {
    setupCalculatorDOM();
  }
})();
