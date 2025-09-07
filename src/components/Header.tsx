import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
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
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              About
            </Link>
            <Link
              href="/#benefits"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              Benefits
            </Link>
            <Link
              href="/#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/direct-funding">
              <Button className="bg-blue-600 hover:bg-blue-700 text-md px-4 py-2 font-bold">
                Pre-imbursement
              </Button>
            </Link>
            <Link href="/reimbursement">
              <Button className="text-md px-4 py-2 font-bold border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600">
                Reimbursement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
