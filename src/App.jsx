import React, { useState, useRef, useEffect } from 'react'
import { FileText, Search, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download, Printer, Menu, ExternalLink, MoreVertical } from 'lucide-react'

const PDFPage3 = ({ highlightId }) => (
  <div className="w-full h-full bg-white p-12 text-sm font-serif text-slate-800 shadow-sm leading-relaxed">
    <div className="flex justify-between border-b border-slate-200 pb-2 mb-8 text-xs text-slate-400 uppercase tracking-wider">
      <span>Management Review &nbsp;|&nbsp; Highlights Q2 2025</span>
      <span>Page 3</span>
    </div>

    <h1 className="text-3xl font-bold text-slate-900 mb-6">Highlights Q2 2025</h1>

    <div className="space-y-4 text-justify">
      <p>
        A.P. Moller - Maersk saw solid performance in the second quarter and delivered EBITDA and EBIT of USD 2.3bn and USD 845m, respectively. The results came on the back of continued focus on
        execution and operational improvements, despite the unprecedented geopolitical volatility and low visibility into macroeconomic developments.
      </p>

      <div className={`transition-colors duration-1000 ease-in-out p-1 rounded ${highlightId === 'ebitda-p3' ? 'bg-yellow-300/50' : ''}`}>
        <p className="font-medium">
          Maersk's results continued to improve year-on-year with consolidated revenue of USD 13.1bn (USD 12.8bn) and EBITDA of USD 2.3bn (USD 2.1bn), while EBIT declined to USD 845m (USD 963m). The
          results were driven by volume and other revenue growth in Ocean, margin improvements in Logistics & Services and significant top line growth in Terminals.
        </p>
      </div>

      <p>June 2025 marked the first month of the Gemini cooperation being successfully phased in and it is on track to deliver the reliability and cost-saving ambitions.</p>
    </div>

    <div className="mt-12 p-6 bg-slate-50 rounded border border-slate-100">
      <h3 className="font-bold text-slate-700 mb-2">Outlook</h3>
      <p className="text-xs text-slate-500">Given the more resilient market demand outside of North America, A.P. Moller - Maersk raises its full-year 2025 financial guidance...</p>
    </div>
  </div>
)

const PDFPage5 = ({ highlightId }) => (
  <div className="w-full h-full bg-white p-12 text-sm font-serif text-slate-800 shadow-sm leading-relaxed">
    <div className="flex justify-between border-b border-slate-200 pb-2 mb-8 text-xs text-slate-400 uppercase tracking-wider">
      <span>Management Review &nbsp;|&nbsp; Review Q2 2025</span>
      <span>Page 5</span>
    </div>

    <h1 className="text-3xl font-bold text-slate-900 mb-6">Review Q2 2025</h1>

    <p className="mb-4">A.P. Moller - Maersk continued to deliver solid results in Q2, driven by sequential volume increases, operational improvements and supported by continued cost control.</p>

    <div className="grid grid-cols-3 gap-4 mb-8 mt-6">
      <div className="bg-blue-50 p-4 rounded text-center">
        <div className="text-xs text-slate-500 uppercase">Ocean Revenue</div>
        <div className="text-xl font-bold text-slate-700">8.6bn</div>
      </div>
      <div className="bg-blue-50 p-4 rounded text-center">
        <div className="text-xs text-slate-500 uppercase">Logistics</div>
        <div className="text-xl font-bold text-slate-700">3.7bn</div>
      </div>
      <div className="bg-blue-50 p-4 rounded text-center">
        <div className="text-xs text-slate-500 uppercase">Terminals</div>
        <div className="text-xl font-bold text-slate-700">1.3bn</div>
      </div>
    </div>

    <div className={`transition-colors duration-1000 ease-in-out p-2 -mx-2 rounded ${highlightId === 'ebitda-p5' ? 'bg-yellow-300/50' : ''}`}>
      <p>
        EBITDA increased to USD 2.3bn (USD 2.1bn), with the EBITDA margin improving to 17.5% (16.8%), driven by higher revenue and cost management. Ocean's EBITDA of USD 1.4bn slightly increased by
        USD 36m, and the EBITDA margin remained stable. Logistics & Services contributed significantly with a USD 71m increase.
      </p>
    </div>
  </div>
)

const PDFPage15 = ({ highlightId }) => {
  const rowRef = useRef(null)

  useEffect(() => {
    if (highlightId === 'gain-on-sale' && rowRef.current) {
      rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [highlightId])

  return (
    <div className="w-full h-full bg-white p-12 text-xs font-sans text-slate-800 shadow-sm">
      <div className="flex justify-between border-b border-slate-200 pb-2 mb-8 text-xs text-slate-400 uppercase tracking-wider">
        <span>Financials &nbsp;|&nbsp; Condensed income statement</span>
        <span>Page 15</span>
      </div>

      <h1 className="text-2xl font-bold text-slate-700 mb-6">Financials</h1>
      <h2 className="text-lg font-semibold text-slate-600 mb-4 border-l-4 border-blue-500 pl-2">Condensed income statement</h2>

      <div className="overflow-hidden rounded border border-slate-200">
        <table className="w-full text-right border-collapse">
          <thead className="bg-slate-100 text-slate-500">
            <tr>
              <th className="text-left py-3 px-2 font-medium w-5/12">Note</th>
              <th className="py-3 px-2 font-medium">Q2 2025</th>
              <th className="py-3 px-2 font-medium">Q2 2024</th>
              <th className="py-3 px-2 font-medium">6M 2025</th>
              <th className="py-3 px-2 font-medium">6M 2024</th>
              <th className="py-3 px-2 font-medium">12M 2024</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50">
              <td className="text-left py-2 px-2 font-semibold text-slate-700">1 Revenue</td>
              <td className="py-2 px-2">13,130</td>
              <td className="py-2 px-2">12,771</td>
              <td className="py-2 px-2">26,451</td>
              <td className="py-2 px-2">25,126</td>
              <td className="py-2 px-2">55,482</td>
            </tr>
            <tr className="bg-slate-50 font-bold hover:bg-slate-100">
              <td className="text-left py-3 px-2">1 Profit before depreciation, amortisation and impairment losses, etc. (EBITDA)</td>
              <td className="py-3 px-2">2,298</td>
              <td className="py-3 px-2">2,144</td>
              <td className="py-3 px-2">5,008</td>
              <td className="py-3 px-2">3,734</td>
              <td className="py-3 px-2">12,128</td>
            </tr>
            <tr className="hover:bg-slate-50 text-slate-500">
              <td className="text-left py-2 px-2">Depreciation, amortisation and impairment losses, net</td>
              <td className="py-2 px-2">1,651</td>
              <td className="py-2 px-2">1,481</td>
              <td className="py-2 px-2">3,271</td>
              <td className="py-2 px-2">2,999</td>
              <td className="py-2 px-2">6,220</td>
            </tr>

            <tr
              ref={rowRef}
              className={`transition-all duration-700 ease-out ${highlightId === 'gain-on-sale' ? 'bg-yellow-300 shadow-sm scale-[1.01] origin-left z-10 relative text-black' : 'hover:bg-slate-50'}`}
            >
              <td className="text-left py-3 px-2 font-medium pl-4 border-l-4 border-transparent">Gain on sale of non-current assets, etc., net</td>
              <td className="py-3 px-2">25</td>
              <td className="py-3 px-2">208</td>
              <td className="py-3 px-2">80</td>
              <td className="py-3 px-2">215</td>
              <td className="py-3 px-2">222</td>
            </tr>

            <tr className="hover:bg-slate-50 text-slate-500">
              <td className="text-left py-2 px-2">Share of profit in joint ventures and associated companies</td>
              <td className="py-2 px-2">173</td>
              <td className="py-2 px-2">92</td>
              <td className="py-2 px-2">281</td>
              <td className="py-2 px-2">190</td>
              <td className="py-2 px-2">369</td>
            </tr>
            <tr className="border-t border-slate-300 font-bold text-slate-800 hover:bg-slate-50">
              <td className="text-left py-3 px-2">1 Profit before financial items (EBIT)</td>
              <td className="py-3 px-2">845</td>
              <td className="py-3 px-2">963</td>
              <td className="py-3 px-2">2,098</td>
              <td className="py-3 px-2">1,140</td>
              <td className="py-3 px-2">6,499</td>
            </tr>
            <tr className="hover:bg-slate-50 text-slate-500">
              <td className="text-left py-2 px-2">Financial items, net</td>
              <td className="py-2 px-2 text-red-500">-111</td>
              <td className="py-2 px-2">13</td>
              <td className="py-2 px-2">66</td>
              <td className="py-2 px-2">164</td>
              <td className="py-2 px-2">317</td>
            </tr>
            <tr className="bg-slate-100 font-bold text-slate-900">
              <td className="text-left py-3 px-2">Profit before tax</td>
              <td className="py-3 px-2">734</td>
              <td className="py-3 px-2">976</td>
              <td className="py-3 px-2">2,164</td>
              <td className="py-3 px-2">1,304</td>
              <td className="py-3 px-2">6,816</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(15) // Default to 15 for the table view
  const [activeHighlight, setActiveHighlight] = useState(null)
  const [zoom, setZoom] = useState(100)

  const handleCitationClick = (pageNum, highlightId) => {
    setCurrentPage(pageNum)
    setActiveHighlight(highlightId)

    setTimeout(() => {}, 3000)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 3:
        return <PDFPage3 highlightId={activeHighlight} />
      case 5:
        return <PDFPage5 highlightId={activeHighlight} />
      case 15:
        return <PDFPage15 highlightId={activeHighlight} />
      default:
        return <PDFPage15 highlightId={activeHighlight} />
    }
  }

  return (
    <div className="flex h-screen w-full bg-slate-200 overflow-hidden font-sans">
      <div className="flex-1 flex flex-col h-full relative">
        <div className="h-14 bg-slate-800 text-white flex items-center justify-between px-4 shadow-md z-20 shrink-0">
          <div className="flex items-center space-x-4">
            <Menu className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide">Maersk Q2 2025 Interim Report.pdf</span>
              <span className="text-[10px] text-slate-400">READ-ONLY</span>
            </div>
          </div>
          <div className="flex items-center bg-slate-700 rounded-lg px-1 py-0.5 border border-slate-600 shadow-inner">
            <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="p-1.5 hover:bg-slate-600 rounded text-slate-300 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-2 flex items-center text-sm font-mono">
              <span className="text-white w-6 text-center">{currentPage}</span>
              <span className="text-slate-500">/ 25</span>
            </div>
            <button onClick={() => setCurrentPage((p) => Math.min(25, p + 1))} className="p-1.5 hover:bg-slate-600 rounded text-slate-300 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2 bg-slate-700/50 rounded px-2 py-1">
              <ZoomOut className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" onClick={() => setZoom((z) => Math.max(60, z - 10))} />
              <span className="text-xs text-slate-300 w-8 text-center font-mono">{zoom}%</span>
              <ZoomIn className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" onClick={() => setZoom((z) => Math.min(150, z + 10))} />
            </div>
            <div className="flex space-x-3 border-l border-slate-600 pl-4">
              <Printer className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Download className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <MoreVertical className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-slate-500/90 overflow-auto p-8 flex justify-center relative scroll-smooth custom-scrollbar">
          <div
            className="bg-white shadow-[0_0_40px_rgba(0,0,0,0.3)] transition-transform duration-200 ease-out origin-top"
            style={{
              width: `${8.5 * (zoom / 100)}in`,
              minHeight: `${11 * (zoom / 100)}in`,
            }}
          >
            {renderPage()}
          </div>
        </div>
      </div>
      <div className="w-[480px] bg-white flex flex-col h-full shadow-2xl z-30 shrink-0 border-l border-slate-300">
        <div className="h-14 border-b border-gray-200 flex items-center px-6 bg-white shrink-0 justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 text-sm">Document Analysis</h2>
              <p className="text-xs text-slate-500">Generated by AI Assistant</p>
            </div>
          </div>
          <Search className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
        </div>

        <div className="flex-1 overflow-y-auto bg-slate-50/50">
          <div className="p-6 space-y-8">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                Executive Summary
              </h3>
              <p className="text-sm leading-7 text-slate-700 text-justify">
                No extraordinary or one-off items affecting EBITDA were reported in Maersk's Q2 2025 results. The report explicitly notes that EBITDA improvements stemmed from operational performance—
                including volume growth, cost control, and margin improvement across Ocean, Logistics & Services, and Terminals segments
                <button
                  onClick={() => handleCitationClick(3, 'ebitda-p3')}
                  className="mx-1.5 px-1.5 py-0.5 rounded text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-blue-200 align-baseline inline-block"
                  title="Go to Page 3"
                >
                  [1]
                </button>
                <button
                  onClick={() => handleCitationClick(5, 'ebitda-p5')}
                  className="mr-1.5 px-1.5 py-0.5 rounded text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-blue-200 align-baseline inline-block"
                  title="Go to Page 5"
                >
                  [2]
                </button>
                .
                <span className="block mt-4">
                  Gains or losses from asset sales, which could qualify as extraordinary items, are shown separately under EBIT and not included in EBITDA. The gain on sale of non-current assets was
                  USD 25m in Q2 2025, significantly lower than USD 208m in Q2 2024, but these affect EBIT, not EBITDA
                  <button
                    onClick={() => handleCitationClick(15, 'gain-on-sale')}
                    className="mx-1.5 px-1.5 py-0.5 rounded text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-blue-200 align-baseline inline-block ring-2 ring-blue-100 animate-pulse"
                    title="Go to Page 15"
                  >
                    [3]
                  </button>
                  . Hence, Q2 2025 EBITDA reflects core operating activities without one-off extraordinary adjustments.
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                Detailed Findings
              </h3>

              <div className="space-y-3">
                <div
                  className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleCitationClick(3, 'ebitda-p3')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Page 3</span>
                    <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-600 group-hover:text-slate-800">EBITDA increase attributed to operational improvements; no mention of extraordinary items.</p>
                </div>

                <div
                  className="group bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleCitationClick(5, 'ebitda-p5')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Page 5</span>
                    <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-blue-500" />
                  </div>
                  <p className="text-sm text-slate-600 group-hover:text-slate-800">EBITDA rise driven by higher revenue and cost control across all segments.</p>
                </div>
                <div
                  className="group bg-yellow-50/50 p-4 rounded-lg border border-yellow-200 hover:border-yellow-400 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleCitationClick(15, 'gain-on-sale')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Page 15</span>
                    <ExternalLink className="w-3 h-3 text-yellow-400 group-hover:text-yellow-600" />
                  </div>
                  <p className="text-sm text-slate-800 font-medium">Gain on sale of non-current assets USD 25m reported separately below EBITDA.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 text-slate-300 p-5 rounded-xl text-xs space-y-3">
              <h4 className="font-bold text-white uppercase tracking-wider mb-2">Supporting Evidence Sources</h4>
              <div className="flex gap-3 items-start hover:text-white transition-colors cursor-pointer" onClick={() => handleCitationClick(3, 'ebitda-p3')}>
                <span className="font-mono text-blue-400 shrink-0">[1]</span>
                <p>Interim Report Q2 2025, Page 3: "Highlights"</p>
              </div>
              <div className="flex gap-3 items-start hover:text-white transition-colors cursor-pointer" onClick={() => handleCitationClick(5, 'ebitda-p5')}>
                <span className="font-mono text-blue-400 shrink-0">[2]</span>
                <p>Interim Report Q2 2025, Page 5: "Review Q2 2025"</p>
              </div>
              <div className="flex gap-3 items-start hover:text-white transition-colors cursor-pointer" onClick={() => handleCitationClick(15, 'gain-on-sale')}>
                <span className="font-mono text-yellow-400 shrink-0">[3]</span>
                <p>Interim Report Q2 2025, Page 15: "Condensed Income Statement"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
