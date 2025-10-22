import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Section() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the powerful tools and capabilities that make our platform the perfect choice for your business
            needs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600 mb-4">
                Lightning-fast loading times and optimized performance for the best user experience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600 mb-4">
                Simple APIs and comprehensive documentation make integration a breeze.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button size="lg">Get Started Today</Button>
        </div>
      </div>
    </section>
  )
}
