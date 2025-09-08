// Create a new file: app/donate/page.tsx

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Music, Heart } from 'lucide-react';
import Header from '@/components/Header';
// You will need a component for your donation form/widget
// import DonationForm from '@/components/DonationForm';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Give Locally.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {' '}
                Inspire a Musician.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your donation stays within 50 miles of your zip code, directly
              funding an instrument for a student in your community.
            </p>
          </div>
        </div>
      </section>
      {/* How Your Donation Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Local Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                1. You Donate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make a secure one-time or recurring donation.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Music className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                2. We Fund a Student
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use 100% of your gift to fund an instrument for an approved
                student near you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                3. Your Community Flourishes
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A young musician in your area gets to experience the joy of
                music.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Donation Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center bg-gray-100 p-8 rounded-t-lg">
                <CardTitle className="text-3xl font-bold text-gray-900">
                  Make Your Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/*
                 ******************************************************************
                 *  THIS IS WHERE YOUR DONATION WIDGET/FORM WILL GO.              *
                 *  Services like Donorbox, Fundraise Up, or a custom Stripe      *
                 *  integration would be perfect here.                            *
                 *  The form MUST have a required ZIP CODE field.                 *
                 ******************************************************************
                 */}
                {/* <div
                  className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Donation Form Placeholder</p>
                  <p>
                    A secure donation form with amount selection, recurring
                    options, and a required ZIP CODE field will be embedded
                    here.
                  </p>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Transparency & Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Trust is Our Priority
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Born Creative is a registered 501(c)(3) nonprofit organization. All
            donations are tax-deductible. We are committed to financial
            transparency and ensuring every dollar makes the maximum possible
            impact.
          </p> */}
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
      </footer>{' '}
    </div>
  );
}
