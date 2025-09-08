import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Music,
  CheckCircle,
  XCircle,
  FileText,
  DollarSign,
} from 'lucide-react';
import Header from '@/components/Header';

export default function ReimbursementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Reimbursed for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Instrument Purchase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              This program is for families and schools who have already
              purchased an instrument and are seeking reimbursement. We&apos;ll
              process your application and send the funds directly to you.
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
              The Reimbursement Program is perfect for families and schools who
              have already purchased a musical instrument and need financial
              assistance. Whether you bought it last week or last month, we can
              help you get reimbursed for your investment in music education.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Instructions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Reimbursement Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting reimbursed for your musical instrument purchase is simple
              and straightforward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Purchase Your Instrument
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Buy a musical instrument for yourself or your school from
                    any vendor. Make sure to keep the itemized receipt that
                    shows the instrument details, price, and purchase date. This
                    receipt is essential for your reimbursement.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Important:</strong> Keep your receipt safe!
                      You&apos;ll need to upload a clear photo of it with your
                      application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Submit Your Application
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Fill out our simple application form with your purchase
                    details and upload your receipt. Include information about
                    the instrument, where you bought it, and how it will be used
                    for music education.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Processing time:</strong> We typically review
                      applications within 3-5 business days and will contact you
                      if we need any additional information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Receive Reimbursement
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Once approved, we&apos;ll process your reimbursement and
                    send the funds directly to you via check or direct deposit.
                    You&apos;ll receive the full amount you paid for the
                    instrument (up to our program limits).
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Payment methods:</strong> We can send a check by
                      mail or deposit funds directly to your bank account for
                      faster processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Checklist Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Make sure you have all the required documents before submitting
              your application. This checklist will help ensure a smooth
              reimbursement process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Required Documents */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    Required Documents
                  </CardTitle>
                  <CardDescription>
                    These documents are essential for your application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Itemized Receipt
                        </p>
                        <p className="text-sm text-gray-600">
                          A clear photo of your receipt showing instrument
                          details, price, and purchase date
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Application Form
                        </p>
                        <p className="text-sm text-gray-600">
                          Complete application with your contact information and
                          purchase details
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Proof of Identity
                        </p>
                        <p className="text-sm text-gray-600">
                          Valid photo ID (driver&apos;s license, passport, or
                          state ID)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Educational Purpose
                        </p>
                        <p className="text-sm text-gray-600">
                          Brief explanation of how the instrument will be used
                          for music education
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What We Don't Accept */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <XCircle className="h-6 w-6 text-red-600 mr-3" />
                    What We Don&apos;t Accept
                  </CardTitle>
                  <CardDescription>
                    These documents won&apos;t be accepted for reimbursement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Credit Card Slips
                        </p>
                        <p className="text-sm text-gray-600">
                          We need itemized receipts, not just payment
                          confirmations
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Blurry Photos
                        </p>
                        <p className="text-sm text-gray-600">
                          Receipt photos must be clear and readable
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Non-Musical Items
                        </p>
                        <p className="text-sm text-gray-600">
                          Only musical instruments and accessories are eligible
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Old Purchases
                        </p>
                        <p className="text-sm text-gray-600">
                          Instruments must be purchased within the last 6 months
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Limits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Limits & Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our program limits and guidelines will help ensure
              your application is processed smoothly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <DollarSign className="h-6 w-6 text-green-600 mr-3" />
                    Reimbursement Limits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-semibold text-gray-900">
                        Individual Students
                      </p>
                      <p className="text-gray-600">Up to $500 per instrument</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-gray-900">
                        Schools & Organizations
                      </p>
                      <p className="text-gray-600">
                        Up to $2,000 per application
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-semibold text-gray-900">
                        Annual Limit
                      </p>
                      <p className="text-gray-600">
                        One application per person/school per year
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    Eligibility Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Must be for educational purposes
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Purchase within last 6 months
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Valid itemized receipt required
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        Must be a musical instrument or accessory
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your reimbursement application today. Make sure you have all
              the required documents ready before you begin.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reimbursement Application Form
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to begin your reimbursement application.
                We&apos;ll review it and get back to you within 3-5 business
                days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 font-bold"
                >
                  Start Your Reimbursement Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 font-bold border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Download Checklist
                </Button>
              </div>
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
                © 2025 Born Creative. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
