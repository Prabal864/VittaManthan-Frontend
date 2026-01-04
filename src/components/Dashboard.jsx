import React, { useMemo, useState, useEffect } from "react";
import { useTransactionsByConsentId } from "../hooks/useTransactionsByConsentId";
import ConsentManager from "./ConsentManager";
import ProcessingModal from "./ProcessingModal";
import { SetuProvider } from "../contexts/SetuContext";
import { 
  LayoutDashboard, 
  BarChart2, 
  PiggyBank, 
  Briefcase, 
  MessageSquare, 
  ArrowRightLeft, 
  FileCheck, 
  Settings, 
  Palette, 
  HelpCircle, 
  LogOut,
  Zap,
  Sun,
  Moon,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import "../index.css";
import "../styles/Transactions.css";
import "../styles/TransactionsCarousel.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true" && params.get("id")) {
      return "Consent";
    }
    return "Dashboard";
  });
  const [theme, setTheme] = useState("dark");
  const [consentId, setConsentId] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { transactions, allTransactions, loading, error, fetchTransactions, fetchTransactionsViaSession, total, paginate, rawResponse, notification, loadingMessage } = useTransactionsByConsentId();
  const [lastUpdated, setLastUpdated] = useState(null);
  const [activeConsents, setActiveConsents] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('setu_consents');
    if (saved) {
      const parsed = JSON.parse(saved);
      setActiveConsents(parsed.filter(c => c.status === 'ACTIVE'));
    }
  }, []);

  const handleConsentClick = async (id) => {
    setConsentId(id);
    setPage(1);
    setLastUpdated(null);
    await fetchTransactionsViaSession(id, 1, pageSize);
    setLastUpdated(new Date());
  };

  const handleFetch = async () => {
    setPage(1);
    if (!consentId) {
      setLastUpdated(null);
      fetchTransactions(consentId, 1, pageSize);
      return;
    }
    await fetchTransactions(consentId, 1, pageSize);
    setLastUpdated(new Date());
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    paginate(newPage, pageSize);
  };

  const [expandedIdx, setExpandedIdx] = useState(null);

  const parseAmount = (value) => {
    if (typeof value === "number") return value;
    if (value === null || value === undefined) return 0;
    const cleaned = String(value).replace(/[^0-9.-]/g, "");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const currencySymbol = useMemo(() => {
    const sample = allTransactions?.find((t) => t && (t.currency || t.currencySymbol));
    const raw = sample?.currencySymbol || sample?.currency;
    if (!raw) return "₹";
    const s = String(raw).trim();
    if (s.length === 1) return s;
    const upper = s.toUpperCase();
    if (upper === "INR") return "₹";
    if (upper === "USD") return "$";
    if (upper === "EUR") return "€";
    if (upper === "GBP") return "£";
    return "₹";
  }, [allTransactions]);

  const formatCurrency = (amount = 0, currencySymbol = "$") => {
    const numeric = Number(amount) || 0;
    return `${currencySymbol}${numeric.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const transactionSummary = useMemo(() => {
    if (!allTransactions || allTransactions.length === 0) {
      return { totalVolume: 0, avgTicket: 0, successRate: 0, totalCount: 0 };
    }

    const amounts = allTransactions.map((tx) => parseAmount(tx.amount || tx.value || tx.price || tx.total || 0)).filter((n) => Number.isFinite(n));
    const totalVolume = amounts.reduce((sum, val) => sum + Math.abs(val), 0);
    const totalCount = allTransactions.length;

    const successCount = allTransactions.filter((tx) => {
      const status = String(tx.status || tx.state || "").toLowerCase();
      return status.includes("success") || status.includes("confirm") || status.includes("complete") || status.includes("posted") || status === "ok";
    }).length;

    const avgTicket = totalCount ? totalVolume / totalCount : 0;
    const successRate = totalCount ? Math.round((successCount / totalCount) * 100) : 0;

    return { totalVolume, avgTicket, successRate, totalCount };
  }, [allTransactions]);

  const renderPagination = () => {
    const totalPages = Math.ceil(total / pageSize);
    if (totalPages <= 1) return null;

    const pages = [];
    // Always show first page
    pages.push(1);

    if (page > 3) {
      pages.push('...');
    }

    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push('...');
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return (
      <div className="pagination-container">
        <button 
          className="page-nav-btn"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1 || loading}
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="page-numbers">
          {pages.map((p, i) => (
            <button
              key={i}
              className={`page-number ${p === page ? 'active' : ''} ${p === '...' ? 'dots' : ''}`}
              onClick={() => typeof p === 'number' && handlePageChange(p)}
              disabled={p === '...'}
            >
              {p}
            </button>
          ))}
        </div>

        <button 
          className="page-nav-btn"
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages || loading}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    );
  };

  // --- New Render Functions for the Design UI ---

  const renderDashboardHome = () => (
    <div className="dashboard-home-grid">
      {/* Left Column (Main) */}
      <div className="dashboard-main-col">
        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-icon sales">🛍️</div>
            <div className="stat-info">
              <span className="stat-label">Total Sales</span>
              <h3 className="stat-value">$987,454</h3>
            </div>
            <span className="stat-badge success">↑ 9.2%</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon experience">📦</div>
            <div className="stat-info">
              <span className="stat-label">Total Experience</span>
              <h3 className="stat-value">$546,654</h3>
            </div>
            <span className="stat-badge danger">↓ 5.9%</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon revenue">🎁</div>
            <div className="stat-info">
              <span className="stat-label">Total Revenue</span>
              <h3 className="stat-value">$575,584</h3>
            </div>
            <span className="stat-badge success">↑ 7.4%</span>
          </div>
        </div>

        {/* Balance & Chart Row */}
        <div className="balance-chart-row">
          <div className="balance-section">
            <div className="balance-header">
              <span className="balance-label">My Balance</span>
              <h2 className="balance-amount">$154.54,85,00</h2>
              <span className="balance-sub">You Made An Extra $58,313.00 In This Years</span>
            </div>
            <div className="balance-actions">
              <button className="action-btn"><span className="icon">+</span> Add</button>
              <button className="action-btn"><span className="icon">↻</span> Convert</button>
              <button className="action-btn"><span className="icon">↗</span> Send</button>
              <button className="action-btn"><span className="icon">↙</span> Receive</button>
              <button className="action-btn"><span className="icon">•••</span> More</button>
            </div>
          </div>
          <div className="chart-section">
             {/* Simple CSS Bar Chart Placeholder */}
             <div className="simple-bar-chart">
                {[30, 50, 40, 70, 90, 60, 45].map((h, i) => (
                  <div key={i} className="chart-bar-wrapper">
                    <div className={`chart-bar ${i===4 ? 'active':''}`} style={{height: `${h}%`}}></div>
                    <span className="chart-label">Nov {12+i}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="invoices-section">
          <div className="section-header">
            <h3>Invoices</h3>
            <button className="new-invoice-btn">+ New Invoice</button>
          </div>
          <table className="invoices-table">
            <thead>
              <tr>
                <th>NUMBER</th>
                <th>DATE</th>
                <th>CLIENT NAME</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="icon">📄</span> WAL3241</td>
                <td>April 28, 2016</td>
                <td>Arlene McCoy</td>
                <td>$154.54,85,00</td>
                <td><span className="status-badge complete">Complete</span></td>
              </tr>
              <tr>
                <td><span className="icon">📄</span> WAL3241</td>
                <td>April 28, 2016</td>
                <td>Arlene McCoy</td>
                <td>$154.54,85,00</td>
                <td><span className="status-badge pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column (Sidebar Widgets) */}
      <div className="dashboard-right-col">
        {/* Payment Method */}
        <div className="right-widget payment-widget">
          <h3>Payment Method</h3>
          <div className="credit-card">
            <div className="card-top">
              <div className="card-chip"></div>
              <div className="card-contactless">)))</div>
            </div>
            <div className="card-number">4557 1475 1474 1447</div>
            <div className="card-bottom">
              <div className="card-balance">
                <span>Balance</span>
                <h4>$245,875</h4>
              </div>
              <div className="card-expiry">
                <span>Exp Date</span>
                <h4>02/24</h4>
              </div>
            </div>
            <div className="card-logo"></div>
          </div>
          <button className="add-payment-btn">+ Add Payment Method</button>
        </div>

        {/* Recent Transactions List */}
        <div className="right-widget recent-widget">
          <div className="widget-header">
            <h3>Recent</h3>
            <button className="more-btn">•••</button>
          </div>
          <div className="recent-list">
            {[
              {name: 'Esther Howard', date: 'September 5, 2013', amount: '↑ 10.2%', type: 'Transfer'},
              {name: 'Ralph Edwards', date: 'September 5, 2013', amount: '↑ 11.2%', type: 'Transfer'},
              {name: 'Dianne Russell', date: 'May 31, 2015', amount: '↓ 4.2%', type: 'Subscription', down: true},
              {name: 'Courtney Henry', date: 'April 28, 2016', amount: '↑ 58.6%', type: 'Transfer'},
              {name: 'Ronald Richards', date: 'October 25, 2019', amount: '↓ 7.5%', type: 'Transfer', down: true},
            ].map((item, i) => (
              <div key={i} className="recent-item">
                <div className="recent-avatar"></div>
                <div className="recent-info">
                  <h4>{item.name}</h4>
                  <span>{item.date}</span>
                </div>
                <div className={`recent-amount ${item.down ? 'down' : 'up'}`}>
                  <h4>{item.amount}</h4>
                  <span>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const sectionInfo = {
    Dashboard: { title: "Dashboard", subtitle: "Overview of your financial activity" },
    Statistics: { title: "Statistics", subtitle: "Analyze your spending habits" },
    Savings: { title: "Savings", subtitle: "Track your savings goals" },
    Portfolio: { title: "Portfolio", subtitle: "Manage your investments" },
    Messages: { title: "Messages", subtitle: "Recent communications" },
    Transactions: { title: "Transactions", subtitle: "Review your transaction history" },
    Consent: { title: "Consent Management", subtitle: "Manage your financial data consents securely" },
    Settings: { title: "Settings", subtitle: "Account configuration" },
    Appearances: { title: "Appearances", subtitle: "Customize your view" },
    Help: { title: "Help", subtitle: "Support and documentation" },
  };

  const currentInfo = sectionInfo[activeSection] || { title: activeSection, subtitle: "" };

  return (
    <div className={`dashboard-root ${theme === "light" ? "theme-light" : ""}`}>
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon-box"><Zap size={20} fill="currentColor" /></div>
          <span className="logo-text">FinPilot</span>
        </div>
        
        <div className="nav-section-label">MENU</div>
        <nav>
          <ul>
            <li className={activeSection === "Dashboard" ? "active" : ""} onClick={() => setActiveSection("Dashboard")}>
              <span className="icon"><LayoutDashboard size={20} /></span> Dashboard
            </li>
            <li className={activeSection === "Statistics" ? "active" : ""} onClick={() => setActiveSection("Statistics")}>
              <span className="icon"><BarChart2 size={20} /></span> Statistics
            </li>
            <li className={activeSection === "Savings" ? "active" : ""} onClick={() => setActiveSection("Savings")}>
              <span className="icon"><PiggyBank size={20} /></span> Savings
            </li>
            <li className={activeSection === "Portfolio" ? "active" : ""} onClick={() => setActiveSection("Portfolio")}>
              <span className="icon"><Briefcase size={20} /></span> Portfolio
            </li>
            <li className={activeSection === "Messages" ? "active" : ""} onClick={() => setActiveSection("Messages")}>
              <span className="icon"><MessageSquare size={20} /></span> Messages <span className="badge">4</span>
            </li>
            <li className={activeSection === "Transactions" ? "active" : ""} onClick={() => setActiveSection("Transactions")}>
              <span className="icon"><ArrowRightLeft size={20} /></span> Transactions
            </li>
            <li className={activeSection === "Consent" ? "active" : ""} onClick={() => setActiveSection("Consent")}>
              <span className="icon"><FileCheck size={20} /></span> Consent
            </li>
          </ul>
        </nav>

        <div className="nav-section-label">GENERAL</div>
        <nav>
          <ul>
            <li className={activeSection === "Settings" ? "active" : ""} onClick={() => setActiveSection("Settings")}>
              <span className="icon"><Settings size={20} /></span> Settings
            </li>
            <li className={activeSection === "Appearances" ? "active" : ""} onClick={() => setActiveSection("Appearances")}>
              <span className="icon"><Palette size={20} /></span> Appearances
            </li>
            <li className={activeSection === "Help" ? "active" : ""} onClick={() => setActiveSection("Help")}>
              <span className="icon"><HelpCircle size={20} /></span> Help
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-link" onClick={() => alert('Logged out!')}>
            <span className="icon"><LogOut size={20} /></span> Log Out
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h2>{currentInfo.title}</h2>
            <p>{currentInfo.subtitle}</p>
          </div>
          <div className="header-right">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="user-profile">
              <div className="avatar"></div>
              <div className="user-info">
                <span className="name">Ralph Edwards</span>
                <span className="email">ralph.edwards@gmail.com</span>
              </div>
              <span className="chevron">⌄</span>
            </div>
          </div>
        </header>

        <section className="dashboard-content-wrapper">
          {activeSection === "Transactions" ? (
            <div className="transactions-panel">
              {/* Active Consents Carousel */}
              {activeConsents.length > 0 && (
                <div className="active-consents-carousel">
                  <h3>Active Consents</h3>
                  <div className="carousel-track">
                    {activeConsents.map((consent) => (
                      <div 
                        key={consent.id} 
                        className={`carousel-card ${consentId === consent.id ? 'selected' : ''}`}
                        onClick={() => handleConsentClick(consent.id)}
                      >
                        <div className="carousel-card-header">
                          <span className="status-dot active"></span>
                          <span className="carousel-id">{consent.id.slice(0, 8)}...</span>
                        </div>
                        <div className="carousel-card-body">
                          <span className="carousel-vua">{consent.vua ? consent.vua.split('@')[0] : 'Unknown'}</span>
                          <span className="carousel-date">{new Date(consent.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

               {/* Existing Transactions Logic */}
               {/* Stats removed as per request */}


              <div className="transactions-list">
                {notification && (
                  <div className={`notification-banner ${notification.type}`}>
                    {notification.message}
                  </div>
                )}
                <ProcessingModal isOpen={loading} message={loadingMessage || "Processing..."} />
                {!loading && error && <div className="error-banner">{error}</div>}
                {!loading && !error && transactions.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">📂</div>
                    <div className="empty-title">No transactions yet</div>
                    <div className="empty-subtitle">Fetch with a consent ID to populate the feed.</div>
                    <details>
                      <summary>Show raw backend response</summary>
                      <pre className="raw-response">{JSON.stringify(rawResponse, null, 2)}</pre>
                    </details>
                  </div>
                )}
                {!loading && !error && transactions.length > 0 && (
                  <>
                    <div className="transactions-table-header">
                      <div className="th-item">TRANSACTION</div>
                      <div className="th-item">AMOUNT</div>
                      <div className="th-item">DATE</div>
                      <div className="th-item">STATUS</div>
                      <div className="th-item">ACTION</div>
                    </div>
                    {transactions.map((tx, idx) => {
                       // Use account number if available, otherwise fallback to ID or narration
                       const title = tx.accountNumber || tx.payerAccount || tx.payeeAccount || tx.vpa || tx.counterpartyVpa || tx.narration || 'Account ' + (tx.id ? tx.id.slice(-4) : 'Unknown');
                       const amountRaw = tx.amount || tx.value || tx.price || tx.total || 0;
                       const currency = (typeof tx.currency === 'string' && tx.currency.length === 1) ? tx.currency : currencySymbol;
                       const status = tx.status || tx.state || 'Success';
                       const type = (tx.type || tx.transactionType || '').toUpperCase();
                       const isDebit = type === 'DEBIT' || type === 'DR' || (String(amountRaw).startsWith('-'));
                       const signedAmount = parseAmount(amountRaw);
                       const amountVal = Math.abs(signedAmount);
                       const amountSign = isDebit ? '-' : '+';
                       const amountColor = isDebit ? '#ef4444' : '#22c55e';
                       const txDate = tx.timestamp || tx.date || tx.bookingDate || tx.valueDate;
                       
                       const Icon = isDebit ? ArrowUpRight : ArrowDownLeft;
                       const iconBg = isDebit ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)';
                       const iconColor = isDebit ? '#ef4444' : '#22c55e';

                       return (
                        <div key={idx} className={`transaction-card ${expandedIdx === idx ? 'expanded' : ''}`}>
                          <div className="transaction-row">
                            <div className="td-item td-transaction">
                              <div className="t-icon-box" style={{ background: iconBg, color: iconColor, padding: '8px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon size={18} />
                              </div>
                              <div className="t-copy">
                                <div className="t-head"><span className="t-title">{String(title)}</span></div>
                                <div className="t-sub" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{tx.id || tx.txnId || 'Ref: ' + (idx + 1)}</div>
                              </div>
                            </div>
                            <div className="td-item td-amount" style={{color: amountColor, fontWeight: '600'}}>
                              {amountSign}{formatCurrency(amountVal, currency)}
                            </div>
                            <div className="td-item td-date">{txDate ? new Date(txDate).toLocaleDateString() : 'Today'}</div>
                            <div className="td-item td-status">
                              <span className={`status-badge ${status.toLowerCase() === 'success' ? 'success' : 'pending'}`} style={{ textTransform: 'capitalize' }}>
                                {status}
                              </span>
                            </div>
                            <div className="td-item td-action">
                              <button className="details-btn" onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}>
                                {expandedIdx === idx ? 'Close' : 'Details'}
                              </button>
                            </div>
                          </div>
                          {expandedIdx === idx && (
                            <div className="transaction-expanded">
                              <div className="details-grid">
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Transaction ID</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.id || tx.txnId || '-'}</span>
                                </div>
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Reference</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.reference || tx.refId || '-'}</span>
                                </div>
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Mode</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.mode || tx.paymentMode || 'UPI'}</span>
                                </div>
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Narration</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.narration || tx.description || '-'}</span>
                                </div>
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Counterparty VPA</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.vpa || tx.counterpartyVpa || '-'}</span>
                                </div>
                                <div className="detail-item">
                                  <span className="label" style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Timestamp</span>
                                  <span className="value" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>{tx.timestamp || tx.date || new Date().toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                       );
                    })}
                  </>
                )}
              </div>
              {/* Pagination Controls */}
              {renderPagination()}
            </div>
          ) : activeSection === "Consent" ? (
            <SetuProvider>
              <ConsentManager />
            </SetuProvider>
          ) : (
            renderDashboardHome()
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
