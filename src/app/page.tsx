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
  Heart,
  Users,
  TrendingUp,
  GraduationCap,
  DollarSign,
} from 'lucide-react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Making Music
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                Accessible
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              We help people and schools get musical instruments through our
              &apos;Pre-imbursement&apos; and Reimbursement programs. Whether
              you need help with a recent purchase or can&apos;t afford the
              upfront cost, we are here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/direct-funding">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
                >
                  Get Upfront Funding
                </Button>
              </a>
              <a href="/reimbursement">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 font-bold border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Apply for Reimbursement
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Power of Music Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Direct Funding and Reimbursement programs create a ripple
              effect of positive impact across communities, benefiting students,
              families, schools, and the broader music economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Student Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Students gain access to quality instruments, improving their
                  musical education and developing skills that enhance academic
                  performance, creativity, and personal growth.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Family Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Family Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Families receive financial relief from expensive instrument
                  purchases, making music education accessible regardless of
                  economic background.
                </CardDescription>
              </CardContent>
            </Card>

            {/* School Benefits */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  School Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Schools can expand their music programs with confidence,
                  knowing they&apos;ll receive reimbursement for instrument
                  purchases that benefit their entire student body.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Economic Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Economic Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Increased demand for instruments stimulates manufacturing and
                  creates more luthier and music industry jobs, strengthening
                  the entire music economy.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Mental Wellness */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Mental Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Music education promotes mental health, emotional expression,
                  and cognitive development, building stronger, more resilient
                  learners.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Community Impact */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Community Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  Every reimbursement is an investment in our community&apos;s
                  future, creating opportunities for cultural enrichment and
                  artistic expression for all.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Two Paths to Get Your Instrument
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer two ways to support your musical journey. Choose the one
              that&apos;s right for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Direct Funding Program */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Option 1: The Pre-imbursement Program
                </h3>
                <p className="text-lg text-blue-600 font-bold">
                  (For those who need help with the upfront cost)
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Apply With a Quote
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Choose an instrument from one of our approved stores and
                      submit an application with their official quote.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      We Pay the Store
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Once your application is approved, we pay the music store
                      directly for your instrument.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Pick Up Your Instrument
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We&apos;ll send you a voucher to take to the store and
                      pick up your brand new instrument, ready to play!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reimbursement Program */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Option 2: The Reimbursement Program
                </h3>
                <p className="text-lg text-purple-600 font-semibold">
                  (For those who have already purchased an instrument)
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Purchase Your Instrument
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Buy a musical instrument for yourself or your school from
                      any vendor and keep the itemized receipt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Submit Your Application
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Fill out our simple application form with your purchase
                      details and upload your receipt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Receive Reimbursement
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Once approved, we&apos;ll process your reimbursement and
                      send the funds directly to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Our Mission Section */}
      <section id="donate-cta" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Power Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contribution directly funds a young musician&apos;s dream
              right here in your community. Every donation stays local.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Donate Funds Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Donate Funds
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  Your financial gift helps us purchase new instruments for
                  students within 50 miles of your zip code.
                </CardDescription>
                <a href="/donate">
                  <Button className="bg-green-600 hover:bg-green-700 font-bold">
                    Give Today
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Donate an Instrument Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Donate an Instrument
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  Have a gently-used instrument you&apos;d like to donate?
                  We&apos;ll find it a new home with a student in need.
                </CardDescription>
                <a href="/contact">
                  <Button
                    variant="outline"
                    className="font-bold border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Volunteer Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Volunteer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                  Lend your time and talent to help with events, application
                  reviews, or community outreach.
                </CardDescription>
                <a href="/contact">
                  <Button
                    variant="outline"
                    className="font-bold border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    Get Involved
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Born Creative
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Born Creative is a charitable organization dedicated to making
              music education accessible to everyone. We believe that every
              student should have the opportunity to learn and grow through
              music, regardless of their family&apos;s financial situation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through our Direct Funding and Reimbursement programs, we&apos;re
              not just supporting individual students – we&apos;re investing in
              the future of music education and strengthening our communities
              through the power of music.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our programs? Want to apply for funding or
            reimbursement? We&apos;re here to help you on your musical journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/direct-funding">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
              >
                Get Upfront Funding
              </Button>
            </a>
            <a href="/reimbursement">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-bold border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Apply for Reimbursement
              </Button>
            </a>
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
