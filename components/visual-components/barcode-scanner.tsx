"use client"

import { useState } from "react"
import { Camera, Scan, CheckCircle, AlertCircle, RotateCcw, Flashlight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BarcodeScanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [scanHistory, setScanHistory] = useState([
    { id: 1, data: "1234567890123", type: "UPC-A", timestamp: "2 minutes ago", product: "Organic Bananas" },
    { id: 2, data: "9780123456789", type: "ISBN", timestamp: "5 minutes ago", product: "JavaScript Guide" },
    {
      id: 3,
      data: "https://example.com/product/abc123",
      type: "QR Code",
      timestamp: "10 minutes ago",
      product: "Product Link",
    },
  ])
  const [flashEnabled, setFlashEnabled] = useState(false)

  const startScanning = () => {
    setIsScanning(true)
    setScannedData(null)

    // Simulate scanning process
    setTimeout(() => {
      const mockData = "1234567890123"
      setScannedData(mockData)
      setIsScanning(false)

      // Add to history
      const newScan = {
        id: Date.now(),
        data: mockData,
        type: "UPC-A",
        timestamp: "Just now",
        product: "Sample Product",
      }
      setScanHistory((prev) => [newScan, ...prev.slice(0, 4)])
    }, 3000)
  }

  const stopScanning = () => {
    setIsScanning(false)
  }

  const clearResult = () => {
    setScannedData(null)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg border shadow-lg">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Scan className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Barcode Scanner</h3>
            <p className="text-sm text-gray-600">Scan QR codes and barcodes</p>
          </div>
        </div>
      </div>

      {/* Scanner View */}
      <div className="p-4">
        <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4">
          {/* Camera View Simulation */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            <img src="/camera-viewfinder-with-scanning-overlay.png" alt="Camera view" className="w-full h-full object-cover opacity-60" />
          </div>

          {/* Scanning Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Scanning Frame */}
              <div className="w-48 h-48 border-2 border-white rounded-lg relative">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-500 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-500 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-500 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-500 rounded-br-lg" />

                {/* Scanning Line */}
                {isScanning && (
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-blue-500 animate-pulse"
                    style={{
                      animation: "scan 2s linear infinite",
                      background: "linear-gradient(90deg, transparent, #3B82F6, transparent)",
                    }}
                  />
                )}
              </div>

              {/* Status Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm text-center">
                {isScanning ? "Scanning..." : "Position barcode in frame"}
              </div>
            </div>
          </div>

          {/* Flash Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 text-white hover:bg-white/20 ${flashEnabled ? "bg-white/20" : ""}`}
            onClick={() => setFlashEnabled(!flashEnabled)}
          >
            <Flashlight className="w-5 h-5" />
          </Button>
        </div>

        {/* Controls */}
        <div className="flex gap-2 mb-4">
          {!isScanning ? (
            <Button onClick={startScanning} className="flex-1">
              <Camera className="w-4 h-4 mr-2" />
              Start Scanning
            </Button>
          ) : (
            <Button onClick={stopScanning} variant="outline" className="flex-1 bg-transparent">
              Stop Scanning
            </Button>
          )}

          {scannedData && (
            <Button onClick={clearResult} variant="ghost" size="icon">
              <RotateCcw className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Scan Result */}
        {scannedData && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-green-900 mb-1">Scan Successful!</h4>
                <p className="text-sm text-green-700 font-mono break-all">{scannedData}</p>
                <p className="text-xs text-green-600 mt-1">UPC-A Barcode</p>
              </div>
            </div>
          </div>
        )}

        {/* Scan History */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Recent Scans</h4>
          <div className="space-y-2">
            {scanHistory.map((scan) => (
              <div key={scan.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                  <Scan className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{scan.product}</p>
                  <p className="text-xs text-gray-500 font-mono truncate">{scan.data}</p>
                  <p className="text-xs text-gray-400">
                    {scan.type} • {scan.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <AlertCircle className="w-4 h-4" />
          <span>Supports QR codes, UPC, EAN, and more</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          50% { top: calc(100% - 4px); }
          100% { top: 0; }
        }
      `}</style>
    </div>
  )
}
