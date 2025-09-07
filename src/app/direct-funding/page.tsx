import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Music, CheckCircle, MapPin, Globe, Phone } from 'lucide-react';
import Header from '@/components/Header';

export default function DirectFundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let Us Help You Get Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                First Instrument
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              This program is for families and schools who need financial
              assistance before purchasing an instrument. We pay the store
              directly, so you can focus on making music.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who This Program Is For
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Direct Funding Program is perfect for families and schools who
              want to get a musical instrument but need help with the upfront
              cost. We work with approved music stores to pay for your
              instrument directly, then you pick it up with a voucher we
              provide.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Direct Funding Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your instrument through our Direct Funding Program is
              simple and straightforward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Apply With a Quote
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Choose an instrument from one of our approved stores and get
                    an official quote. You'll need the store name, instrument
                    details, and the exact price. Make sure to get a written
                    quote that includes all fees and taxes.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> Visit the store in person or call
                      them to get the most accurate pricing. Online prices may
                      not include all fees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    We Pay the Store
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Once your application is approved (usually within 3-5
                    business days), we'll contact the store directly and pay for
                    your instrument. You don't need to worry about any upfront
                    costs or payment processing.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>What happens next:</strong> We'll send you an
                      email confirmation and coordinate with the store to
                      prepare your instrument.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Pick Up Your Instrument
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    We'll send you a voucher to take to the store. Simply
                    present the voucher and your ID, and you can pick up your
                    brand new instrument, ready to play! The store will have
                    everything set up and waiting for you.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Important:</strong> Bring a valid photo ID when
                      picking up your instrument. The voucher is valid for 30
                      days from the date of issue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approved Vendors Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Approved Music Stores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with trusted music stores in your area. Choose from any of
              these approved vendors for your instrument purchase.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Store 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Music World
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Full-service music store with instruments, lessons, and
                  repairs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      123 Main Street, Downtown
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      musicworld.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Strings & Things
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Specializing in string instruments and accessories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      456 Oak Avenue, Midtown
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 234-5678
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      stringsandthings.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Brass & Woodwinds
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Expert in brass and woodwind instruments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      789 Pine Street, Uptown
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 345-6789
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      brassandwoodwinds.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Percussion Plus
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Drums, percussion, and rhythm instruments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      321 Elm Street, Westside
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 456-7890
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      percussionplus.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Guitar Central
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Acoustic and electric guitars, amps, and accessories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      654 Maple Drive, Eastside
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 567-8901
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      guitarcentral.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Keyboard Corner
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Pianos, keyboards, and digital instruments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      987 Cedar Lane, Northside
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      (555) 678-9012
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-gray-500" />
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      keyboardcorner.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your Direct Funding application today. The process is simple
              and we're here to help every step of the way.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Direct Funding Application Form
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to begin your application. We'll review
                it and get back to you within 3-5 business days.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
              >
                Start Your Direct Funding Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Music className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Born Creative</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                Making music education accessible to all
              </p>
              <p className="text-sm text-gray-500">
                © 2024 Born Creative. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
