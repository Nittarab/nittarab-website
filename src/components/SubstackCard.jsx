import Card from "./ui/Card";

export default function SubstackCard() {
  return (
    <Card className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 p-3 h-28 flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-orange-600 dark:text-orange-400 z-10"
          >
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
        </div>
        <p className="text-base font-clash-display-medium text-gray-800 dark:text-gray-200">
          Nittarab
        </p>
      </div>
      <a
        href="https://nittarab.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-2 rounded-full font-clash-display-medium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10 text-sm">Subscribe</span>
      </a>
    </Card>
  );
}
