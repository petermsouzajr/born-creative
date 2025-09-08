import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Music, Heart, Users, Target, Award, Globe } from 'lucide-react';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                Born Creative
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              With community support, every student can have the opportunity to
              learn and grow through music, regardless of their family&apos;s
              financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl mb-6">
                Born Creative was founded in 2020 with a simple yet powerful
                vision: to make music education accessible to every student,
                regardless of their family&apos;s financial situation. Our
                founders, a group of music educators and community leaders,
                witnessed firsthand how financial barriers were preventing
                talented students from pursuing their musical dreams.
              </p>

              <p className="text-lg mb-6">
                We started with a small pilot program in our local community,
                helping just a handful of families get the instruments their
                children needed. The impact was immediate and profound – not
                only did these students thrive musically, but their families
                felt supported and their schools could expand their music
                programs.
              </p>

              <p className="text-lg mb-6">
                Today, Born Creative has grown into a comprehensive program that
                serves hundreds of families and schools across the region.
                We&apos;ve developed two distinct pathways – our Direct Funding
                Program (Pre-imbursement) for those who need upfront assistance,
                and our Reimbursement Program for those who have already made
                the investment in music education.
              </p>

              <p className="text-lg">
                Our mission extends beyond just providing instruments.
                We&apos;re building a community where music education is valued,
                supported, and accessible to all. Every instrument we help
                provide represents not just a tool for learning, but a gateway
                to creativity, confidence, and lifelong joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core mission and values,
              ensuring we stay true to our commitment to music education
              accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  To make music education accessible to every student by
                  removing financial barriers and providing support for families
                  and schools to invest in musical instruments and education.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Compassion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  We approach every family&apos;s situation with empathy and
                  understanding, recognizing that financial challenges
                  shouldn&apos;t limit someone&apos;s potential for musical
                  growth and expression.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  We believe in the power of community support and work to build
                  partnerships with schools, music stores, and families to
                  create a network of musical opportunity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  We maintain the highest standards in our programs, ensuring
                  that every person receives quality support and every
                  instrument meets educational standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  We work tirelessly to remove barriers and create multiple
                  pathways for families to access music education, regardless of
                  their financial situation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  We measure our success not just in instruments provided, but
                  in the positive impact on students, families, schools, and the
                  broader music education community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who make Born Creative&apos;s
              mission possible. Our team combines expertise in music education,
              nonprofit management, and community outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  Peter Souza
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed"></CardDescription>
              </CardContent>
            </Card>

            {/* <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  Michael Chen
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Program Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Michael oversees our Direct Funding and Reimbursement
                  programs. With a background in music education and community
                  outreach, he ensures every family receives the support they
                  need.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  Dr. Maria Rodriguez
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Education Advisor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Dr. Rodriguez is a music education professor who helps us
                  develop partnerships with schools and ensures our programs
                  align with educational best practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  David Thompson
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Community Outreach Coordinator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  David builds relationships with music stores, schools, and
                  community organizations to expand our reach and ensure
                  families know about our programs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  Lisa Park
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Application Coordinator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Lisa manages our application process and works directly with
                  families to ensure smooth processing of both Direct Funding
                  and Reimbursement applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
                <CardTitle className="text-xl text-gray-900">
                  Robert Williams
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  Finance Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Robert manages our finances and ensures responsible
                  stewardship of donor funds while maximizing our impact in the
                  community.
                </CardDescription>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our founding, Born Creative has made a significant impact on
              music education accessibility in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Instruments Provided</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
              <div className="text-lg text-gray-600">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-lg text-gray-600">Schools Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                $250K+
              </div>
              <div className="text-lg text-gray-600">Funding Distributed</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you&apos;re a family in need of support, a school looking
              to expand your music program, or someone who wants to help make
              music education accessible to all, we invite you to be part of our
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 font-bold"
              >
                Apply for Funding
              </Button>
              <a href="/donate">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 font-bold"
                >
                  Donate to Our Mission
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 font-bold border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Contact Us
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
                © 2025 Born Creative. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
