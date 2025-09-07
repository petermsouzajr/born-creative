import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

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
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              About
            </a>
            <a
              href="/#benefits"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              Benefits
            </a>
            <a
              href="/#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              How It Works
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="/direct-funding">
              <Button className="bg-blue-600 hover:bg-blue-700 text-md px-4 py-2 font-bold">
                Pre-imbursement
              </Button>
            </a>
            <a href="/reimbursement">
              <Button className="text-md px-4 py-2 font-bold border border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-600">
                Reimbursement
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
