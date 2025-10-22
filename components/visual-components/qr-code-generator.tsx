"use client"

import { useState } from "react"
import { QrCode, Download, Copy, Share2, Smartphone, Wifi, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function QrCodeGenerator() {
  const [qrData, setQrData] = useState("https://example.com")
  const [qrType, setQrType] = useState<"url" | "text" | "email" | "phone" | "wifi">("url")
  const [size, setSize] = useState(200)
  const [copied, setCopied] = useState(false)

  const qrTypes = [
    { id: "url", label: "Website URL", icon: QrCode, placeholder: "https://example.com" },
    { id: "text", label: "Plain Text", icon: QrCode, placeholder: "Enter your text here" },
    { id: "email", label: "Email", icon: Mail, placeholder: "user@example.com" },
    { id: "phone", label: "Phone", icon: Phone, placeholder: "+1234567890" },
    { id: "wifi", label: "WiFi", icon: Wifi, placeholder: "Network Name" },
  ]

  const generateQRCode = () => {
    // In a real implementation, this would generate an actual QR code
    return `/placeholder.svg?height=${size}&width=${size}&query=QR code for ${qrData}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrData)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadQR = () => {
    // Simulate download
    console.log("[v0] Downloading QR code...")
  }

  const shareQR = () => {
    // Simulate sharing
    console.log("[v0] Sharing QR code...")
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg border shadow-sm">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <QrCode className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">QR Code Generator</h3>
            <p className="text-sm text-gray-600">Create QR codes for any content</p>
          </div>
        </div>

        {/* QR Type Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {qrTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setQrType(type.id as any)
                setQrData(type.placeholder)
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                qrType === type.id ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <type.icon className="w-4 h-4" />
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="qr-data">Content</Label>
              <Input
                id="qr-data"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                placeholder={qrTypes.find((t) => t.id === qrType)?.placeholder}
                className="mt-1"
              />
            </div>

            {qrType === "wifi" && (
              <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label htmlFor="wifi-name">Network Name (SSID)</Label>
                  <Input id="wifi-name" placeholder="MyWiFiNetwork" />
                </div>
                <div>
                  <Label htmlFor="wifi-password">Password</Label>
                  <Input id="wifi-password" type="password" placeholder="password123" />
                </div>
                <div>
                  <Label htmlFor="wifi-security">Security Type</Label>
                  <select id="wifi-security" className="w-full p-2 border rounded-md">
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="qr-size">Size: {size}px</Label>
              <input
                id="qr-size"
                type="range"
                min="100"
                max="400"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={copyToClipboard} variant="outline" className="flex-1 bg-transparent">
                <Copy className="w-4 h-4 mr-2" />
                {copied ? "Copied!" : "Copy Data"}
              </Button>
            </div>
          </div>

          {/* QR Code Preview */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <div
                className="border-2 border-gray-200 rounded-lg p-4 bg-white"
                style={{ width: size + 32, height: size + 32 }}
              >
                <img
                  src={generateQRCode() || "/placeholder.svg"}
                  alt="Generated QR Code"
                  className="w-full h-full"
                  style={{ width: size, height: size }}
                />
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <Button onClick={downloadQR} variant="outline" className="flex-1 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button onClick={shareQR} variant="outline" className="flex-1 bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">Scan with your phone</p>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Smartphone className="w-4 h-4" />
                <span>Compatible with all QR scanners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            <span className="font-medium">Format:</span> PNG • <span className="font-medium">Size:</span> {size}×{size}
            px
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Ready to scan</span>
          </div>
        </div>
      </div>
    </div>
  )
}
