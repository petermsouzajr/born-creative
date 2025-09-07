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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                Born Creative
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Apply for Reimbursement
            </Button>
          </div>
        </div>
      </nav>

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
              Born Creative reimburses families and schools for musical
              instrument purchases, creating opportunities for students while
              stimulating the music economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
              >
                Apply for Reimbursement
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-bold text-black outline-black "
              >
                Learn More
              </Button>
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
              Our reimbursement program creates a ripple effect of positive
              impact across communities, benefiting students, families, schools,
              and the broader music economy.
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
                  knowing they'll receive reimbursement for instrument purchases
                  that benefit their entire student body.
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
                  Every reimbursement is an investment in our community's
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting reimbursed for your musical instrument purchase is simple
              and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Purchase Your Instrument
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Buy a musical instrument for yourself or your school. Keep your
                receipt and any relevant documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Submit Your Application
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fill out our simple application form with your purchase details
                and upload your receipt.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Receive Reimbursement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Once approved, we'll process your reimbursement and send the
                funds directly to you.
              </p>
            </div>
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
              music, regardless of their family's financial situation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By reimbursing families and schools for musical instrument
              purchases, we're not just supporting individual students – we're
              investing in the future of music education and strengthening our
              communities through the power of music.
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
            Have questions about our reimbursement program? Want to apply for
            funding? We're here to help you on your musical journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-bold text-black outline-black"
            >
              Contact Us
            </Button>
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
