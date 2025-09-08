import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Music, Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Have questions about our programs? Need help with your
              application? We&apos;re here to help you on your musical journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us through any of these channels. We&apos;re here to
              help and typically respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Send us an email and we&apos;ll get back to you within 24
                  hours
                </CardDescription>
                <a
                  href="mailto:info@borncreative.org"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  info@borncreative.org
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Call us during business hours for immediate assistance
                </CardDescription>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-green-600 hover:underline font-semibold"
                >
                  (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Address</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Visit our office or send us mail
                </CardDescription>
                <div className="text-purple-600 font-semibold text-sm">
                  123 Music Street
                  <br />
                  Suite 100
                  <br />
                  Harmony City, HC 12345
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Our office hours for phone and in-person visits
                </CardDescription>
                <div className="text-orange-600 font-semibold text-sm">
                  Monday - Friday
                  <br />
                  9:00 AM - 5:00 PM
                  <br />
                  <span className="text-gray-500">Closed weekends</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 text-center">
                  Contact Form
                </CardTitle>
                <CardDescription className="text-center">
                  We&apos;re here to help with any questions about our programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="direct-funding">
                        Direct Funding Program
                      </option>
                      <option value="reimbursement">
                        Reimbursement Program
                      </option>
                      <option value="general">General Question</option>
                      <option value="application-help">Application Help</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please describe your question or how we can help you..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to some of the most common questions we receive.
              Don&apos;t see your question? Contact us directly!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    What&apos;s the difference between Direct Funding
                    (Pre-imbursement) and Reimbursement?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Direct Funding is for families who need help with the
                    upfront cost of an instrument. We pay the store directly and
                    you pick up the instrument with a voucher. Reimbursement is
                    for families who have already purchased an instrument and
                    need financial assistance. We reimburse you for the cost
                    after you submit your application and receipt.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    How long does the application process take?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    We typically review applications within 3-5 business days.
                    For Direct Funding, once approved, we coordinate with the
                    store and you can usually pick up your instrument within a
                    week. For Reimbursement, we process payments within 7-10
                    business days after approval.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Are there income requirements to qualify?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    We don&apos;t have strict income requirements, but we
                    prioritize families who demonstrate financial need. We
                    consider various factors including family size, expenses,
                    and circumstances. Our goal is to help families who
                    genuinely need assistance to access music education.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Can schools apply for multiple instruments?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    Yes! Schools can apply for multiple instruments up to our
                    program limit of $2,000 per application. We encourage
                    schools to apply for what they need to expand their music
                    programs. Schools can submit multiple applications
                    throughout the year if needed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    What types of instruments are covered?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    We cover all types of musical instruments including strings,
                    woodwinds, brass, percussion, keyboards, and guitars. We
                    also cover essential accessories like cases, stands, and
                    maintenance supplies. The instrument must be for educational
                    purposes and appropriate for the student&apos;s age and
                    skill level.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <HelpCircle className="h-5 w-5 text-blue-600 mr-3" />
                    How can I support Born Creative&apos;s mission?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    There are many ways to support us! You can make a donation,
                    volunteer your time, partner with us as a music store, or
                    help spread the word about our programs. Contact us to learn
                    more about partnership opportunities and how you can help
                    make music education accessible to all.
                  </CardDescription>
                </CardContent>
              </Card>
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
